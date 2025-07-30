import { FaCameraRetro } from "react-icons/fa";

const AboutBox = ({ tog }) => {
  return (
    <>
      <div
        className="col-span-1 h-full row-span-1 px-8 flex flex-col  justify-center"
        onClick={tog}
      >
        <FaCameraRetro className="text-9xl m-auto hover:rotate-12 hover:scale-105 " />
        <h2 className="text-sm ">Who am I?</h2>
        <p className="text-primary font-semibold text-xl hover:cursor-pointer pb-5">
          About Me ...
        </p>
      </div>
    </>
  );
};

export default AboutBox;
