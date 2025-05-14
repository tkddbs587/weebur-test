import { ViewType } from './viewType'

export interface FetchProductsParams {
  skip?: number
  limit?: number
  order?: 'asc' | 'desc'
  search?: string
  sortBy?: string
}
export interface SearchParams {
  q?: string
  sort?: string
}
export interface Product {
  id: number
  title: string
  description: string
  thumbnail: string
  rating: number
  reviews: Review[]
}

export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface ProductListProps {
  initialProducts: Product[]
  viewType: ViewType | undefined
  searchParams: SearchParams
}

export interface ProductItemProps {
  id?: number
  title: string
  description: string
  src: string
  rating: number
  reviewCount: number
}

export interface UseInfiniteProductsOptions {
  initialProducts: Product[]
  searchParams: SearchParams
}
