import { Route, Routes } from 'react-router-dom'
import { Cart } from './components/Cart/index'
import { ProductDetails } from './pages/ProductDetails'
import { Shop } from './pages/Shop'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

const App = () => {
	return (
		<div>
			<Cart />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/product/:productId' element={<ProductDetails />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export { App }
