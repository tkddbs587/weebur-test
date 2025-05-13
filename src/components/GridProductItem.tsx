import { ProductItemProps } from '@/types/products'
import Image from 'next/image'

const GridProductItem = ({
  title,
  description,
  src,
  rating,
  reviewCount,
}: ProductItemProps) => {
  return (
    <li>
      <div className='relative aspect-square w-full rounded-12 bg-gray-100'>
        <Image src={src} fill alt='썸네일 이미지' />
      </div>
      <span className='text-16-700 text-red-300'>{title}</span>
      <p className='text-14-500'>{description}</p>

      <div className='flex items-center gap-4'>
        <Image src='/icons/rating.svg' width={20} height={20} alt='별점' />
        <span className='text-12-500 text-gray-700'>{rating}</span>
      </div>

      <span className='text-13-500 text-gray-500'>{`review ${reviewCount}`}</span>
    </li>
  )
}

export default GridProductItem
