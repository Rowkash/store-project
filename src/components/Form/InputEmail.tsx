import { TPropsInput } from "./types";

const patternEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

const InputEmail = ({ register, errors }: TPropsInput) => {
  return (
    <div className="relative flex flex-col z-0">
      <input
        {...register("email", {
          required: "Email field is required",

          pattern: {
            value: patternEmail,
            message: "Enter a valid Email",
          },
        })}
        type="email"
        id="floating_standard"
        className="block pt-4 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-blue-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        htmlFor="floating_standard"
        className="absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Your Email
      </label>
      {errors.email && (
        <p id="floating_helper_text" className="mt-2 text-base text-red-600">
          Field is required.
        </p>
      )}
    </div>
  );
};

export default InputEmail;
