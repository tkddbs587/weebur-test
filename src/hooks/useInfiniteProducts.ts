import { useEffect, useRef, useState } from 'react'
import { Product, UseInfiniteProductsOptions } from '@/types/products'
import { fetchProducts } from '@/utils/apis/fetchProducts'

export function useInfiniteProducts({
  initialProducts,
  searchParams,
}: UseInfiniteProductsOptions) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [skip, setSkip] = useState(initialProducts.length)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const loaderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setProducts(initialProducts)
    setSkip(initialProducts.length)
    setHasMore(true)
  }, [initialProducts, searchParams.q, searchParams.sort])

  useEffect(() => {
    if (!loaderRef.current || !hasMore) return

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !isLoading) {
          setIsLoading(true)

          try {
            const data = await fetchProducts({
              skip,
              search: searchParams.q,
              sortBy: searchParams.sort === 'rating' ? 'rating' : undefined,
              order: searchParams.sort === 'rating' ? 'desc' : undefined,
            })

            setProducts((prev) => {
              const existingIds = new Set(prev.map((item) => item.id))
              const newItems = data.products.filter(
                (item) => !existingIds.has(item.id)
              )

              const combinedItems = [...prev, ...newItems]
              if (combinedItems.length >= data.total) setHasMore(false)

              return combinedItems
            })

            setSkip((prev) => prev + data.products.length)
          } catch (error) {
            alert('상품 목록을 불러오는 데 실패했습니다.')
            console.error('상품 추가 로딩 실패:', error)
          } finally {
            setIsLoading(false)
          }
        }
      },
      { rootMargin: '300px' }
    )

    observer.observe(loaderRef.current)
    return () => observer.disconnect()
  }, [skip, hasMore, searchParams.q, searchParams.sort, isLoading])

  return {
    products,
    isLoading,
    hasMore,
    loaderRef,
  }
}
