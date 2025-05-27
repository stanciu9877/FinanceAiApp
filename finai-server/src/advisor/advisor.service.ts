import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class AdvisorService {
  async ask(question: string): Promise<{ answer: string }> {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'mistral/mixtral-8x7b-instruct',
        messages: [{ role: 'user', content: question }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000', // Change this to your site/domain if needed
        },
      },
    );

    return {
      answer: response.data.choices[0].message?.content || 'No answer.',
    };
  }
}
