import { CopyrightNotice, FooterInput, FooterButton } from './index'

const Footer = () => {
	return (
		<footer className='bg-slate-200 text-center'>
			<div className='px-6 pt-6'>
				<form action=''>
					<div className='grid md:grid-cols-3 gird-cols-1 gap-4 justify-center items-center'>
						<div className='md:ml-auto md:mb-6'>
							<p className='text-gray-800'>
								<strong>Sign up for our newsletter</strong>
							</p>
						</div>

						<FooterInput />
						<FooterButton>Subscribe</FooterButton>
					</div>
				</form>
			</div>

			<CopyrightNotice>© 2022 Copyright by Chine</CopyrightNotice>
		</footer>
	)
}

export { Footer }
