import GridProductItem from '@/components/GridProductItem'
import ListProductItem from '@/components/ListProductItem'
import { VIEW_COOKIE_KEY } from '@/constants/cookieKey'
import { ViewType } from '@/types/viewType'
import { fetchProducts } from '@/utils/apis/fetchProducts'
import { cookies } from 'next/headers'

const Home = async () => {
  const cookieStore = cookies()
  const viewType = (await cookieStore).get(VIEW_COOKIE_KEY)?.value as
    | ViewType
    | undefined

  const { products } = await fetchProducts()

  return (
    <ul
      className={
        viewType === 'grid'
          ? 'grid grid-cols-4 gap-8'
          : 'flex max-w-1000 flex-col gap-8'
      }
    >
      {products.map((product) => {
        const { id, title, description, thumbnail, rating, reviews } = product
        const commonProps = {
          title,
          description,
          src: thumbnail,
          rating,
          reviewCount: reviews.length,
        }
        return viewType === 'grid' ? (
          <GridProductItem {...commonProps} key={id} />
        ) : (
          <ListProductItem {...commonProps} key={id} />
        )
      })}
    </ul>
  )
}

export default Home
