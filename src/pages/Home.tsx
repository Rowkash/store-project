import { Footer } from '../components/Footer/index'
import { Header } from '../components/Header/index'
import { Hero } from '../components/Hero'

const Home = () => {
	return (
		<div className='h-screen'>
			<Header />
			<Hero />
			<Footer />
		</div>
	)
}

export { Home }
