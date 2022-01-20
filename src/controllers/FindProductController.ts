import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class FindProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const product = await prismaClient.product.findFirst({
      where: {
        id,
      },
      include: {
        ProductCategory: {
          select: {
            category: true
          }
        }
      }
    })

    return response.status(201).json(product);
  }
}