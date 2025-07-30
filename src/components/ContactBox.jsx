import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

const ContactBox = () => {
  return (
    <>
      <div className="col-span-1 row-span-1 px-10 py-5 h-full">
        <h1 className="text-xl text-primary font-semibold mb-2">
          Contact Me...
        </h1>
        <div className="flex flex-col">
          <a
            href="https://instagram.com/_anmolthapa_"
            target="_blank"
            className="flex items-center gap-2 py-1.5 hover:text-primary"
          >
            <FaInstagram className="text-xl" />
            Instagram
          </a>
          <a
            href="mailto:at2558392@gmail.com"
            target="_blank"
            className="flex items-center gap-2 py-1.5 hover:text-primary"
          >
            <MdOutlineAttachEmail className="text-xl" />
            Email
          </a>
          <a
            href="https://github.com/AnmolThh"
            target="_blank"
            className="flex items-center gap-2 py-1.5 hover:text-primary"
          >
            <FaGithub className="text-xl" />
            Git Hub
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactBox;
