import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async updateUserPreferences(userId: string, stocks: string[]) {
    const cleaned = stocks.slice(0, 3).map((s) => s.toUpperCase());

    await prisma.preference.deleteMany({ where: { userId } });

    for (const stock of cleaned) {
      await prisma.preference.create({
        data: { userId, stock },
      });
    }

    return { message: 'Preferences updated successfully' };
  }
}
