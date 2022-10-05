type TProps = {
  children: string;
};

const CopyrightNotice = (props: TProps) => {
  return (
    <div
      className="text-center text-gray-700 p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      {props.children}
    </div>
  );
};

export default CopyrightNotice;
