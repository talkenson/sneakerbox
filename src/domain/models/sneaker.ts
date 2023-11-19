import { z } from 'zod'

export const CreateSneaker = z.object({
  name: z.string(),
  description: z.string(),
  brand: z.string(),
  colorway: z.string(),
  releaseDate: z.string().transform((str) => new Date(str)),
  retailPrice: z.number(),
  silhouette: z.string(),
  sizes: z.array(z.number()),
  quantity: z.number(),
  images: z.array(z.string()).default([]),
})

export const Sneaker = CreateSneaker.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const UpdateSneaker = CreateSneaker.partial()

export type CreateSneaker = z.infer<typeof CreateSneaker>
export type Sneaker = z.infer<typeof Sneaker>
export type UpdateSneaker = z.infer<typeof UpdateSneaker>

/*
  name: 'Nike AirMax 90'
  description: 'A classic sneaker from Nike',
  brand: 'Nike',
  colorway: 'White/Black',
  releaseDate: '2021-01-01',
   retailPrice: 100,
  silhouette: 'AirMax 90',
  sizes: [8, 9, 10],
  quantity: 12,
  images: [
    'https://images.stockx.com/images/Nike-Air-Max-90-White-Black-2020.jpg?fit=clip&bg=FFFFFF&auto=compress&q=90&dpr=2&trim=color&updated_at=1606322442&fm=webp&ixlib=react-9.1.1&w=1240'
  ]
  */
