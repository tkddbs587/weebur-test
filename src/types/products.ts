import { ViewType } from './viewType'

export interface FetchProductsParams {
  skip?: number
  limit?: number
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
}

export interface ProductItemProps {
  id?: number
  title: string
  description: string
  src: string
  rating: number
  reviewCount: number
}
