import { ThemeProvider } from "next-themes";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col bg-base-100  h-fit sm:h-screen items-center justify-center sm:m-auto sm:pl-36 py-32 px-6 sm:py-28"
    >
      <div className="container flex justify-center flex-col sm:flex-row text-accent rounded-md space-y-20 sm:space-y-0">
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <div id="roles_about">
            <div className="flex flex-row space-x-2 items-center text-3xl text-start">
              <h1 className="">Engenheiro de Software</h1>
              <p className="text-5xl">+</p>
            </div>
            <p className="text-xl"> Full Stack Development</p>
          </div>

          <div id="resume" className="space-y-4">
            <div className="flex flex-row space-x-2">
              <p className="text-md">
                Olá meu nome é Alexandre Arthur, <br></br> mas pode me chamar{" "}
                <span className="text-info text-xl font-semibold">Xandy</span>
              </p>
            </div>
            <p>
              Sou um jovem estudante de{" "}
              <span className="text-info font-semibold">
                Ciência da Computação
              </span>{" "}
              no{" "}
              <span className="text-info font-semibold">
                IFG - Câmpus Anápolis
              </span>
              , entusiasta da tecnológia que tem o objetivo aprender tudo que o
              mundo da computação tem a oferecer, desde o HTML básico até
              modelos de Machine Learning avançados.
            </p>
            <a href="/cv.pdf" className="btn btn-primary">
              Resumo
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center drop-shadow-lg">
          <div className="w-full h-52 sm:h-96 pr-2 pb-2 border-2 border-neutral rounded-md bg-[url('/image.jpg')] bg-cover  "></div>
        </div>
      </div>
    </section>
  );
}
