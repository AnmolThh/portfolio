import { img } from "framer-motion/client";

const SkillsBox = () => {
  const images = [
    "Html.png",
    "Css.png",
    "Js.png",
    "TypeScript.png",
    "React.png",
    "Tailwindcss.png",
    "Node.png",
    "Express.png",
    "MongoDb.png",
    "Sql.png",
  ];
  return (
    <>
      <div className="col-span-2 row-span-1 px-4 py-2 h-full flex flex-col  justify-center relative items-center">
        <h1 className="text-xl text-center text-primary font-semibold mb-4 absolute top-[2%]">
          ..Tech Stack..
        </h1>
        <div className=" flex gap-10 flex-wrap ">
          {images.map((item, index) => (
            <img
              src={item}
              alt=""
              className="h-10 hover:rotate-12 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsBox;
