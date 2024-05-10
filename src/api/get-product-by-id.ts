import { api } from '@/lib/axios'

export interface GetProductByIdResponse {
  id: string
  name: string
  price: number
  description: string
  img: string
}

export async function getProductById(productId: string) {
  const response = await api.get<GetProductByIdResponse>(
    `products/${productId}`,
  )

  return response.data
}
