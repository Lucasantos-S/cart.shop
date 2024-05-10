import { api } from '@/lib/axios'

export interface GetProductsResponse {
  id: string
  name: string
  price: number
  description: string
  img: string
}

export async function getProducts() {
  const response = await api.get<GetProductsResponse[]>('products')

  return response.data
}
