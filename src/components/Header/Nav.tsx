import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";

const Nav = () => {
  const { displayCart } = useActions();

  return (
    <nav className="flex h-18 py-4 w-screen m-auto text-white bg-gradient-to-r from-neutral-400 via-cyan-900 to-blue-500">
      <Link to="/">
        <h1 className="transform duration-300 hover:-translate-y-1 font-display font-thin tracking-wide m-auto pl-4 md:pl-12 text-2xl md:text-5xl">
          AllStore
        </h1>
      </Link>

      <ul className="flex justify-end items-end pr-4 md:pr-24 w-full space-x-6 md:space-x-12 font-display font-thin md:font-light">
        <Link to="/contact">
          <li className="text-sm md:text-lg transition duration-300 transform hover:-translate-y-1 hover:text-red-500 border-red-500 hover:border-b-2">
            Contact us
          </li>
        </Link>
        <Link to="/shop">
          <li className="text-sm md:text-lg transition duration-300 transform hover:-translate-y-1 hover:text-red-500 border-red-500 hover:border-b-2">
            Shop
          </li>
        </Link>

        <li
          onClick={() => displayCart()}
          className="flex transition duration-300 transform hover:-translate-y-1 hover:text-red-500 
                    hover:font-normal border-red-500 hover:border-b-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.3"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
