import { useTypedSelector } from "../hooks/useTypedSelector";

const Error = () => {
  const { error } = useTypedSelector((state) => state.products);
  return (
    <div
      className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <span className="font-medium">Oops!</span> Failed loading products.
      {/* <h2>{error}</h2> */}
    </div>
  );
};

export default Error;
