'use client'

import { ProductListProps } from '@/types/products'
import GridProductItem from './GridProductItem'
import ListProductItem from './ListProductItem'
import { useInfiniteProducts } from '@/hooks/useInfiniteProducts'

const ProductList = ({ initialProducts, viewType }: ProductListProps) => {
  const isGrid = viewType === 'grid'
  const { products, isLoading, hasMore, loaderRef } =
    useInfiniteProducts(initialProducts)

  return (
    <>
      {products.map((product) => {
        const { id, title, description, thumbnail, rating, reviews } = product
        const commonProps = {
          title,
          description,
          src: thumbnail,
          rating,
          reviewCount: reviews.length,
        }
        return isGrid ? (
          <GridProductItem {...commonProps} key={id} />
        ) : (
          <ListProductItem {...commonProps} key={id} />
        )
      })}

      {isLoading && (
        <p className='mt-4 text-center text-gray-500'>로딩 중...</p>
      )}

      {hasMore ? (
        <div ref={loaderRef} className='h-10' />
      ) : (
        <p className='mt-4 text-purple-700'>더 이상 불러올 수 없습니다.</p>
      )}
    </>
  )
}

export default ProductList
