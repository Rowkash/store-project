import { useActions } from "../../hooks/useActions";

const ButtonCategory = () => {
  const { changeFilter } = useActions();
  const navTitle = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  const btnStyle =
    "inline-block mx-2.5 px-6 py-2.5 my-2.5 bg-yellow-100 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out";
  return (
    <div className="flex justify-center py-5 my-2.5 flex-wrap">
      <button className={btnStyle} onClick={() => changeFilter("all")}>
        All
      </button>

      {navTitle.map((title, idx) => (
        <button
          key={idx}
          className={btnStyle}
          onClick={() => changeFilter(title)}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default ButtonCategory;
