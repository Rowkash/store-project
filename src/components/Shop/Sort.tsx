import { SortProperty } from "../../redux/filter/types";

const list = [
  { name: "Rating", sortProperty: SortProperty.RATING },
  { name: "Price: Low to Hight", sortProperty: SortProperty.PRICE_ASC },
  { name: "Price: Hight to Low", sortProperty: SortProperty.PRICE_DESC },
];

const Sort = () => {
  return (
    <div className="flex justify-end mb-6 pr-10">
      <label htmlFor="underline_select" className="text-black">
        Sorting by
      </label>
      <select
        id="underline_select"
        defaultValue="1"
        className="block py-1 px-0 w-48 rounded-md text-base text-gray-500 bg-white border-0 border-gray-200 appearance-none dark:text-gray-900 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        {list.map((cat, idx) => (
          <option key={idx}>{cat.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
