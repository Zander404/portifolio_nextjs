"use client";
import { BiMenu } from "react-icons/bi";
import { BsLightbulbOff } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      id="Navbar"
      data-theme=""
      className="w-full flex flex-row justify-between mx-auto px-4 sm:px-20 py-2 fixed top-0 z-50 shadow bg-neutral bg-opacity-80"
    >
      <div className=" flex flex-row space-x-4 justify-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skill">Habilidades</a>
            </li>
            <li>
              <a href="#experience">Experiência</a>
            </li>
            <li>
              <a href="#freelance">Freelance</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <h1 className="flex text-center text-accent underline">Xandyy</h1>
        </div>
      </div>

      <div
        id="nav-btn"
        className="flex flex-row space-x-4 justify-center items-center"
      >
        {theme === "light" ? (
          <button
            id="theme"
            className="btn btn-md btn-ghost bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60"
            onClick={() => {
              setTheme("dark");
            }}
          >
            <BsLightbulbOff size={32} />
          </button>
        ) : (
          <button
            id="theme"
            className="btn btn-md btn-ghost bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60"
            onClick={() => {
              setTheme("light");
            }}
          >
            <BsLightbulbOff size={32} />
          </button>
        )}

        <a
          id="light"
          className="btn btn-md btn-ghost bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60"
          href="/cv.pdf"
         
        >
          <h2>RESUMO</h2>
        </a>
      </div>
    </div>
  );
}
