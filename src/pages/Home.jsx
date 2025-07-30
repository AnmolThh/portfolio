import HeroBox from "../components/HeroBox";
import AboutBox from "../components/AboutBox";
import ProjectBox from "../components/ProjectsBox";
import SkillsBox from "../components/SkillsBox";
import ContactBox from "../components/ContactBox";
import ThemeBox from "../components/ThemeToggle";
import Modal from "../components/Modal";
import { useState } from "react";
import AboutSec from "../components/AboutSec";

const Home = () => {
  const [about, setAbout] = useState(false);

  return (
    <div className="flex-1 w-full flex items-center justify-center px-2">
      <div className="grid  grid-cols-1 md:grid-cols-3 grid-rows-5 md:grid-rows-3 gap-2 w-3xl text-secondary h-fit py-10 md:py-0">
        <div className=" col-span-1 md:col-span-2 row-span-1 bento-box h-65 md:h-50 order-1 md:order-1">
          <HeroBox />
        </div>
        <div className="col-span-1 row-span-1 md:row-span-2 bento-box order-3 md:order-2">
          <ProjectBox />
        </div>
        <div className="col-span-1 row-span-1 bento-box order-2 md:order-3">
          <AboutBox tog={() => setAbout(!about)} />
        </div>
        <div className="col-span-1 row-span-1 bento-box hidden md:block md:order-4">
          <ThemeBox />
        </div>
        <div className="col-span-1 row-span-1 bento-box order-5 md:order-5">
          <ContactBox />
        </div>
        <div className="cols-span-1  md:col-span-2 row-span-1 bento-box order-4 md:order-6">
          <SkillsBox />
        </div>
      </div>

      {/* modal */}
      <Modal open={about} onClose={() => setAbout(false)}>
        <AboutSec />
      </Modal>
    </div>
  );
};

export default Home;
