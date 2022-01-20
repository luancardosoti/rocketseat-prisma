import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class FindProductsByCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const products = await prismaClient.category.findMany({
      where: {
        id,
      },
      include: {
        ProductCategory: {
          select: {
            product: true
          }
        }
      }
    })

    return response.status(201).json(products);
  }
}