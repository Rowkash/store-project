import { XIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import { selectTotalItems } from '../../redux/cart/selectors'

const CartHeader = () => {
	const totalItems = useSelector(selectTotalItems)
	const { displayCart } = useActions()

	return (
		<div className='flex justify-between h-16 bg-gray-200 bg-opacity-90'>
			<p className='text-3xl mx-4 my-3 text-gray-700 font-display'>
				Cart <span className='text-lg'>({totalItems} items)</span>
			</p>
			<XIcon
				className='m-4 h-6 w-6 cursor-pointer text-gray-700 hover:text-gray-900'
				onClick={() => displayCart()}
			/>
		</div>
	)
}

export { CartHeader }
