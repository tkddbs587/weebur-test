import { ProductsResponse } from '@/types/products'

export async function fetchProducts(): Promise<ProductsResponse> {
  const res = await fetch('https://dummyjson.com/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    cache: 'force-cache',
  })

  if (!res.ok) {
    throw new Error(`상품 목록 조회 실패: ${res.status}`)
  }

  return await res.json()
}
