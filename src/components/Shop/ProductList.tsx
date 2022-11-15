import { useSelector } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { selectProductsByFilter } from '../../redux/filter/selectors'
import { IProduct } from '../../redux/products/types'
import { Error } from '../Error'
import { Loader } from '../Loader'
import { ProductCard } from './index'

const ProductList = () => {
	const { status } = useTypedSelector(state => state.products)
	const products = useSelector(selectProductsByFilter)

	if (status === 'loading') {
		return <Loader />
	}

	if (status === 'error') {
		return (
			<h2>
				<Error />
			</h2>
		)
	}

	return (
		<div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-5 gap-x-6 gap-y-6'>
			{products.map((product: IProduct) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	)
}

export { ProductList }
