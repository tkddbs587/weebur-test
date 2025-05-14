import ProductList from '@/components/ProductList'
import SearchForm from '@/components/SearchForm'
import { VIEW_COOKIE_KEY } from '@/constants/cookieKey'
import { SearchParams } from '@/types/products'
import { ViewType } from '@/types/viewType'
import { fetchProducts } from '@/utils/apis/fetchProducts'
import { cookies } from 'next/headers'

const Home = async ({ searchParams }: { searchParams: SearchParams }) => {
  const cookieStore = cookies()
  const params = await searchParams
  const viewType = (await cookieStore).get(VIEW_COOKIE_KEY)?.value as
    | ViewType
    | undefined

  const { products: initialProducts } = await fetchProducts({
    search: params.q,
    sortBy: params.sort === 'rating' ? 'rating' : undefined,
    order: params.sort === 'rating' ? 'desc' : undefined,
  })

  return (
    <>
      <SearchForm searchParams={params} />
      <ProductList
        viewType={viewType}
        initialProducts={initialProducts}
        searchParams={params}
      />
    </>
  )
}

export default Home
