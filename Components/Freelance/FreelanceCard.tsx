import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub, BsLink } from "react-icons/bs";
import { HiCursorArrowRipple } from "react-icons/hi2";
interface PropsFreelance {
  title: string;
  description: string;
  link_git: string;
  link_site: string;
}

export default function FreelanceCard(props: PropsFreelance) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-start bg-primary p-5 space-x-4 space-y-4 rounded-md w-full ">
      <img className=" w-full sm:w-full h-24 sm:h-56" alt={"projeto photo"} src={"/lulu.jpeg"} />
      <div className="flex flex-col">
        <div className="flex-1 w-full justify-start text-start">
          <p className=" text-md sm:text-xl">{props.title}</p>
          <p className=" text-sm sm:text-md">{props.description}</p>
        </div>
        <div className="flex flex-row justify-end items-end text-end sm:my-12 space-x-6">
          <a href={props.link_git}>
            <BsGithub size={32} />
          </a>
          <a href={props.link_site}>
            <BiLinkExternal size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}
