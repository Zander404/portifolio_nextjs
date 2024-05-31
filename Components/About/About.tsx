import { ThemeProvider } from "next-themes";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex w-screen h-screen bg-base-100 sm:px-32 py-52 sm:py-28">
      <div className="container flex justify-center flex-col sm:flex-row text-accent rounded-md space-y-32 sm:space-y-0">

        <div className="flex-1 flex flex-col justify-center px-6 space-y-4">
          <div id="roles_about">
            <div className="flex flex-row space-x-2 items-center text-3xl text-start">
              <h1 className="">Engenheiro de Software</h1>
              <p className="text-5xl">+</p>
            </div>
            <p className="text-xl"> Full Stack Development</p>
          </div>

          <div id="resume" className="space-y-4">
            <p className="text-md">
              Lorem ipsum dolor sit amet. Et nisi corporis ab facilis adipisci
              rem consequatur illo sit mollitia omnis eum impedit nisi et sint
              quod. Eum aliquid officia et sint veniam qui dolorem eveniet. Ad
              earum officia est sint esse quo laborum voluptatum?
            </p>
            <a className="btn btn-neutral">Resumo</a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center drop-shadow-lg">
          <div className="w-full h-52 sm:h-96 pr-2 pb-2 border-2 border-neutral rounded-md -mt-2 bg-[url('/lulu.jpeg')] bg-center hover:-translate-y-1 hover:-translate-x-1"></div>
        </div>
      </div>
    </section>
  );
}
