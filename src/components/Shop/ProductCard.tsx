import { Link } from 'react-router-dom'
import { IProduct } from '../../redux/products/types'
import { Button } from '../Button'
import { RatingCount } from '../RatingCount'

const ProductCard = ({
	id,
	category,
	description,
	image,
	price,
	rating,
	title
}: IProduct) => {
	return (
		<div
			className='bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden py-3'
			key={id}
		>
			<div className='relative pb-48 overflow-hidden'>
				<img
					className='absolute inset-0 h-full w-full object-contain '
					src={image}
					alt={title}
				/>
			</div>

			<div className='p-4 flex flex-col'>
				<div className=' px-4 py-3 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs text-center'>
					{category}
				</div>
				<h2 className='mt-2 mb-2 font-bold'>{title.substring(0, 25)}</h2>
				<p className='text-sm truncate'>{description}</p>
				<span className='font-bold text-xl'>{price} $</span>
				<RatingCount count={rating.count} rate={rating.rate} />
			</div>

			<div className='mt-3 flex justify-around'>
				<div>
					<Link to={`/product/${id}`}>
						<Button>Read more</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export { ProductCard }
