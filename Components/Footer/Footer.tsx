"use client";

import { LiaMapSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <section
      id="Footer"
      className="flex flex-col sm:flex-row bg-neutral justify-around sm:m-auto px-6 text-accent p-10 z-50"
    >
      <div className="flex flex-col text-center sm:text-start space-y-3 ">
        <h1 className="text-md"> Xandy</h1>
        <div className="text-sm flex flex-row space-x-2 justify-start">
          <MdEmail />
          <a href="mailto:contato.xandyy1@gmail.com" className="">contato.xandyy1@gmail.com</a>
        </div>
        <div className="text-sm flex flex-row space-x-2 justify-start">
          <LiaMapSolid />
          <p>Goiás/Brazil</p>
        </div>
      </div>
      <div className="flex flex-col text-center sm:text-start">
        <h1 className="text-md">Pages</h1>
        <a href="#about" className="text-sm">
          About
        </a>
        <a href="#skill" className="text-sm">
          Habilidades
        </a>
        <a href="#experience" className="text-sm">
          Experiência
        </a>
        <a href="#freelance" className="text-sm">
          Freelance
        </a>
      </div>
      <div className="flex flex-col text-center sm:text-start">
        <h1 className="text-xl">Desenvolvido por:</h1>
        <p className="text-md">Xandyy</p>
      </div>
    </section>
  );
}
