const CartButton = (props: any) => {
  return (
    <button
      onClick={props.onClick}
      className="h-12 p-4 my-4 text-sm bg-gray-900 text-white rounded transition 
								duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border"
    >
      {props.children}
    </button>
  );
};

export default CartButton;
