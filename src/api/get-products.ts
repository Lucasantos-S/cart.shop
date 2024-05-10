import { api } from '@/lib/axios'

export interface GetProductsResponse {
  id: string
  name: string
  price: number
  description: string
}

export async function getProduct() {
  const response = await api.get<GetProductsResponse>('product')

  return response.data
}
