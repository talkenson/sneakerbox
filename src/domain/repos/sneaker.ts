import { prisma } from 'prisma'
import { CreateSneaker } from '../models/sneaker.ts'
import { Sneaker, SneakerImage } from 'prisma/types'

export class SneakerRepository {
  async add(sneaker: CreateSneaker): Promise<Sneaker & { images: SneakerImage[] }> {
    return await prisma.sneaker.create({
      data: {
        ...sneaker,
        images: {
          createMany: {
            data: sneaker.images.map((image) => ({ url: image })),
          },
        },
      },
      include: {
        images: true,
      },
    })
  }

  async get(id: string): Promise<(Sneaker & { images: SneakerImage[] }) | null> {
    return await prisma.sneaker.findUnique({
      where: {
        id,
      },
      include: {
        images: true,
      },
    })
  }

  async update(id: string, sneaker: Sneaker): Promise<Sneaker> {
    return sneaker
  }

  async delete(id: string): Promise<Sneaker> {
    return {} as Sneaker
  }
}
