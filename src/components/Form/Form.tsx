import { useForm } from 'react-hook-form'
import { InputEmail, InputMessage, InputName } from './index'

const Form = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors }
	} = useForm()

	const onSubmit = handleSubmit(data => {
		alert(JSON.stringify(data, null, 4))
		reset()
	})

	return (
		<div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
			<div className='relative py-3 sm:max-w-xl sm:mx-auto'>
				<div className='absolute inset-0 bg-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
				<div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
					<div className='max-w-md mx-auto'>
						<div>
							<h1 className='text-3xl font-extrabold'>Contact us</h1>
							<p className='mt-3 text-lg'>
								Our team is happy to answer your sales questions. Fill out the
								form and we'll be in touch as soon possible.
							</p>
							<hr className='mt-3 border-gray-300' />
						</div>
						<div className='divide-y divide-gray-200'>
							<form
								onSubmit={onSubmit}
								className='pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8'
							>
								<InputName register={register} required errors={errors} />

								<InputEmail register={register} required errors={errors} />

								<InputMessage register={register} required errors={errors} />
								<div className='flex items-end justify-end'>
									<button
										type='submit'
										className='bg-blue-500 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded'
									>
										Send
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Form }
