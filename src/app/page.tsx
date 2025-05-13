import GridProductItem from '@/components/GridProductItem'
import { fetchProducts } from '@/utils/apis/fetchProducts'

const Home = async () => {
  const { products } = await fetchProducts()

  return (
    <ul className='grid grid-cols-4 gap-8'>
      {products.map((product) => {
        const { id, title, description, thumbnail, rating, reviews } = product
        return (
          <GridProductItem
            key={id}
            title={title}
            description={description}
            src={thumbnail}
            rating={rating}
            reviewCount={reviews.length}
          />
        )
      })}
    </ul>
  )
}

export default Home
