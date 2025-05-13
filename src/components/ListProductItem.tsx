import { ProductItemProps } from '@/types/products'
import Image from 'next/image'

const ListProductItem = ({
  title,
  description,
  src,
  rating,
  reviewCount,
}: ProductItemProps) => {
  return (
    <li className='flex h-80 gap-16'>
      <div className='relative h-20 w-20 rounded-8 bg-gray-100 md:h-80 md:w-80'>
        <Image src={src} fill alt='썸네일 이미지' />
      </div>

      <div className='max-w-800'>
        <div className='flex items-center gap-4'>
          <Image src='/icons/rating.svg' width={20} height={20} alt='별점' />
          <span className='text-12-500 text-gray-700'>{`${rating} / review ${reviewCount}`}</span>
        </div>

        <span className='text-16-700 text-red-300'>{title}</span>
        <p className='truncate'>{description}</p>
      </div>
    </li>
  )
}

export default ListProductItem
