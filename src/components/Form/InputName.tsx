import { TPropsInput } from "./types";

const patternName = /^[a-z][a-z. ]{2,29}$/i;

const InputName = ({ register, errors }: TPropsInput) => {
  return (
    <div className="relative flex flex-col z-0">
      <input
        {...register("name", {
          required: "The field is required",
          pattern: {
            value: patternName,
            message: "Name should contain 2-60 characters",
          },
        })}
        type="text"
        id="floating_standard"
        className="block pt-4 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-blue-500 appearance-none dark:text-black focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        htmlFor="floating_standard"
        className="absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Your Name
      </label>
      {errors.name && (
        <p id="floating_helper_text" className="mt-2 text-base text-red-600">
          Field is required.
        </p>
      )}
    </div>
  );
};

export default InputName;

/*
        className="block py-2.5 px-0 w-52 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"


*/
