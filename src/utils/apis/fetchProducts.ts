import { BASE_URL } from '@/constants/baseUrl'
import { FetchProductsParams, ProductsResponse } from '@/types/products'

export async function fetchProducts({
  skip = 0,
  limit = 20,
}: FetchProductsParams = {}): Promise<ProductsResponse> {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`, {
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
