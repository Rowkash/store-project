import { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { ShopNav, Sort, ProductList } from '../components/Shop/index'
import { Footer } from '../components/Footer/index'
import { Search } from '../components/Search'
import { Header } from '../components/Header/index'
import { Hero } from '../components/Hero'

const Shop = () => {
	const { products } = useTypedSelector(state => state.products)
	const { fetchProducts } = useActions()

	useEffect(() => {
		if (products.length === 0) {
			fetchProducts()
		}
	}, [products])

	return (
		<div className='h-screen bg-slate-200'>
			<Header />
			<Hero />
			<ShopNav />
			<Search />
			{/* <Sort /> */}
			<ProductList />
			<Footer />
		</div>
	)
}

export { Shop }
