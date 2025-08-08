import { PrismaClient } from "@prisma/client";

import { prismaService } from "../../service/prisma";
import { BookModel } from "../../core/book/entity/Book";

class BookRepositoryPrisma {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async registerBook(book: Omit<BookModel, "id">) {
    //alterei esse aqui
    const bookResult = await this.prisma.book.create({
      data: {
        author: book.author,
        title: book.title,
        descriptionType: book.descriptionType,
        userId: book.userId,
        ImagesBook: {
          create: [...book.ImagesBook],
        },
      },
      include: {
        ImagesBook: {
          select: {
            pictureName: true,
          },
        },
      },
    });
    return bookResult;
  }
  async findByTitle(title: string) {
    return await this.prisma.book.findFirst({
      where: {
        title,
      },
    });
  }

  async getAllBooks(idUser: string) {
    return await this.prisma.book.findMany({
      where: {
        userId: idUser,
      },
      select: {
        id: true,
        author: true,
        title: true,
        descriptionType: true,
        userId: true,
        ImagesBook: {
          select: {
            pictureName: true,
          },
        },
      },
    });
  }
}

export default new BookRepositoryPrisma(prismaService);
