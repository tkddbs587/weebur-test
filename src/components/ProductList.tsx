'use client'

import { ProductListProps } from '@/types/products'
import GridProductItem from './GridProductItem'
import ListProductItem from './ListProductItem'
import { useInfiniteProducts } from '@/hooks/useInfiniteProducts'

const ProductList = ({
  initialProducts,
  viewType,
  searchParams,
}: ProductListProps) => {
  const isGrid = viewType === 'grid'

  const { products, isLoading, hasMore, loaderRef } = useInfiniteProducts({
    initialProducts,
    searchParams,
  })

  return (
    <ul
      className={
        isGrid ? 'grid grid-cols-4 gap-8' : 'flex max-w-1000 flex-col gap-8'
      }
    >
      {products.length === 0 && !isLoading && (
        <p className='mt-4 text-center text-gray-500'>
          일치하는 결과가 없습니다.
        </p>
      )}
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

      {!isLoading && hasMore && products.length > 0 && (
        <div ref={loaderRef} className='h-10' />
      )}

      {!isLoading && !hasMore && products.length > 0 && (
        <p className='mt-4 text-purple-700'>더 이상 불러올 수 없습니다.</p>
      )}
    </ul>
  )
}

export default ProductList
