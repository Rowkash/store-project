type TProps = {
  title: string;
  image: string;
};

const Image = ({ title, image }: TProps) => {
  return (
    <div>
      <img alt={title} src={image} className="object-fit w-3/4 rounded-xl" />
    </div>
  );
};

export default Image;
