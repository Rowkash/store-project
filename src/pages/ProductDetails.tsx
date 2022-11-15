import { useEffect, useState } from 'react'
import { IProduct } from '../redux/products/types'
import { Footer } from '../components/Footer/index'
import { Header } from '../components/Header/index'
import { Loader } from '../components/Loader'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Image, Info } from '../components/Product/index'

const initialState = {
	id: 0,
	title: '',
	category: '',
	description: '',
	image: '',
	price: 0,
	rating: {
		rate: 0,
		count: 0
	}
}

const ProductDetails = () => {
	const { productId } = useParams()
	const navigate = useNavigate()
	const [product, setProduct] = useState<IProduct>(initialState)

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.then(res => setProduct(res.data))
			.catch(err => {
				alert('Error loading product')
				navigate('/shop')
			})
	}, [])

	return (
		<div>
			<Header />
			{product === initialState ? (
				<Loader />
			) : (
				<section>
					<div className='relative max-w-screen-xl px-4 py-8 mx-auto'>
						<div className='grid items-start grid-cols-1 gap-8 md:grid-cols-2'>
							<Image {...product} />
							<Info product={product} />
						</div>
					</div>
				</section>
			)}
			<Footer />
		</div>
	)
}

export { ProductDetails }
