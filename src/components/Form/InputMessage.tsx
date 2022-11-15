import { TPropsInput } from './types'

const InputMessage = ({ register, errors }: TPropsInput) => {
	return (
		<div>
			<textarea
				{...register('message', {
					required: 'The field is required'
				})}
				rows={4}
				className='block p-2.5 w-full text-black placeholder:text-gray-600 text-md bg-gray-300 rounded-lg border focus:ring-blue-500 focus:border-blue-500'
				placeholder='Your message...'
			/>
			{errors.message && (
				<p id='floating_helper_text' className='mt-2 text-base text-red-600'>
					Field is required.
				</p>
			)}
		</div>
	)
}

export { InputMessage }
