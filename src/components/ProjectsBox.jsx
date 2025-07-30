const ProjectBox = () => {
  return (
    <>
      <div className="cols-span-1 h-full row-span-2 px-8 py-5">
        <h1 className="text-xl text-primary font-semibold ">Projects...</h1>
        <div className="py-3">
          <h2 className="text-sm mb-2">Completed--</h2>
          <div className=" text-sm pl-5 ">
            <a
              href="https://todo-mu-beige-45.vercel.app/"
              target="_blank"
              className="text-primary"
            >
              -Todo-List
            </a>
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-sm mb-2">Ongoing--</h2>
          <div className=" text-sm pl-5 ">
            <p className="text-primary mb-2">
              -Management Information System for 3rdIrbn
            </p>
            <p className="text-primary">-Rent Managent Saas appication</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
