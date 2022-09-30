import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { useActions } from "../hooks/useActions";

const Search = () => {
  const [value, setValue] = useState<string>("");
  const { setSearchValue } = useActions();

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="flex justify-start pl-10 mb-2.5">
      <form method="GET">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </span>
          <input
            value={value}
            onChange={onChangeInput}
            type="search"
            className="w-52 py-2 text-sm text-white rounded-md pl-10 focus:outline-none bg-white focus:text-gray-900"
            placeholder="Search..."
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
