import { BASE_URL } from '@/constants/baseUrl'
import { FetchProductsParams, ProductsResponse } from '@/types/products'

export async function fetchProducts({
  skip = 0,
  limit = 20,
  search,
  sortBy,
  order,
}: FetchProductsParams = {}): Promise<ProductsResponse> {
  const params = new URLSearchParams()
  params.set('limit', String(limit))
  params.set('skip', String(skip))

  if (search) params.set('q', search)
  if (sortBy) params.set('sortBy', sortBy)
  if (order) params.set('order', order)

  const endpoint = search || sortBy ? 'products/search' : 'products'
  const url = `${BASE_URL}/${endpoint}?${params.toString()}`

  const res = await fetch(url, {
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
