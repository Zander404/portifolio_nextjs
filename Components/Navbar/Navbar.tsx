"use client";
import { BiMenu } from "react-icons/bi";
import { BsLightbulbOff } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function Navbar() {
  const {theme, setTheme} = useTheme();
  
  return (
    <div
      id="Navbar"
      data-theme=''
      className="w-full flex flex-row justify-between mx-auto px-4 sm:px-20 py-2 fixed top-0 z-50 shadow bg-neutral bg-opacity-80"
    >
      <div className=" flex flex-row space-x-4 justify-center">
        <a
          id="menu"
          className="btn btn-sm sm:btn-md btn-ghost bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60"
        >
          <BiMenu color="white" size={32} />
        </a>
        <div className="flex items-center">
          <h1 className="flex text-center text-accent underline">Xandyy</h1>
        </div>
      </div>

      <div id="nav-btn" className="flex flex-row space-x-4 justify-center items-center">
        {theme === "light" ? (
          <button
            id="theme"
            className="btn btn-sm sm:btn-md  btn-ghost bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60"
            onClick={() => {
              setTheme('dark');
            }}
          >
            <BsLightbulbOff size={32} />
          </button>
        ) : (
          <button
            id="theme"
            className="btn btn-sm sm:btn-md btn-ghost bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60"
            onClick={() => {
              setTheme('light');
            }}
          >
            <BsLightbulbOff size={32} />
          </button>
        )}

        <button
          id="light"
          className="btn btn-sm sm:btn-md btn-ghost bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60"
        >
          <h2>RESUME</h2>
        </button>
      </div>
    </div>
  );
}
