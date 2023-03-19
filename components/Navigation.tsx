import Link from "next/link";
import { FC } from "react";

const Navigation = () => {
  return (
    <header
      style={{ zIndex: 100 }}
      className="h-20 fixed left-0 right-0 text-gray-700 bg-black flex justify-between px-8 items-center sm:text-xl  md:text-2xl lg:text-4xl lg:h-24"
    >
      <div>
        {/*  <Link className="text-white text-sm font-normal" href={"/#projects"}>
          Projects
        </Link>
        <Link className="text-white text-sm font-normal" href={"/aboutme"}>
          Who am I?
        </Link> */}
      </div>
      <div className="flex gap-3">
        <a href="mailto:angelica.moberg@hotmail.com">
          <img src="/letter.png" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/angelica-moberg-skoglund-012aa2212/"
        >
          <img src="/linkedinlogo.webp" />
        </a>
        <a target="_blank" href="https://github.com/totaldekadens">
          <img src="/githublogo.webp" />
        </a>
      </div>
    </header>
  );
};

export default Navigation;
