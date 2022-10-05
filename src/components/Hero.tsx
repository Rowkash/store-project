import logo from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div
      className="bg-center bg-cover bg-fixed bg-no-repeat md:w-full h-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${logo})`,
      }}
    >
      <h1 className="flex text-3xl md:text-5xl h-full m-auto  md:ml-auto md:mt-auto w-4/5 md:w-1/2 text-white font-display justify-center items-center">
        The place where you can get everything
      </h1>
    </div>
  );
};

export default Hero;
