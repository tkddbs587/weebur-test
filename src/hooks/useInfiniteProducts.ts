import { useEffect, useRef, useState } from 'react'
import { Product } from '@/types/products'
import { fetchProducts } from '@/utils/apis/fetchProducts'

export function useInfiniteProducts(initialProducts: Product[]) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [skip, setSkip] = useState(initialProducts.length)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!loaderRef.current || !hasMore) return

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !isLoading) {
          setIsLoading(true)

          try {
            const data = await fetchProducts({ skip })

            setProducts((prev) => [...prev, ...data.products])
            setSkip((prev) => prev + data.products.length)

            if (products.length + data.products.length >= data.total) {
              setHasMore(false)
            }
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
  }, [skip, hasMore, isLoading, products.length])

  return {
    products,
    isLoading,
    hasMore,
    loaderRef,
  }
}
