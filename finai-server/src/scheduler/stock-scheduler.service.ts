/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

@Injectable()
export class StockSchedulerService {
  async generatePersonalizedAdviceForAllUsers(userId?: string) {
    let users;
    if (userId) {
      users = await prisma.user.findFirst({
        where: { id: userId },
      });
    } else {
      users = await prisma.user.findMany({
        include: {
          preferences: true,
        },
      });
    }
    for (const user of users) {
      const stockSymbols = user.preferences.map((p) => p.stock);
      if (stockSymbols.length === 0) continue;

      const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${stockSymbols.join(',')}`;
      const res = await axios.get(url);
      const stocks = res.data.quoteResponse.result;

      const summary = stocks
        .map(
          (stock) =>
            `${stock.symbol}: ${stock.shortName}, price: $${stock.regularMarketPrice}`,
        )
        .join('\n');

      const prompt = `Generate financial advice based on the following preferred stocks for a moderate-risk investor:\n\n${summary}`;

      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'mistral/mixtral-8x7b-instruct',
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'http://localhost:3000',
          },
        },
      );
      const adviceText =
        response.data.choices[0].message?.content || 'No advice.';

      await prisma.advice.create({
        data: {
          userId: user.id,
          content: adviceText,
          date: new Date(),
        },
      });
    }
  }
}
