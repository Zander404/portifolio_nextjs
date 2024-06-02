import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub, BsLink } from "react-icons/bs";
import { HiCursorArrowRipple } from "react-icons/hi2";
interface PropsFreelance {
  title: string;
  description: string;
  image: string
  link_git: string;
  link_site: string;
}

export default function FreelanceCard(props: PropsFreelance) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-around justify-center items-start bg-primary p-5 space-x-4 space-y-4 rounded-md w-full ">
      <img className=" w-full sm:w-96 h-24 sm:h-56 rounded-md" alt={"projeto photo"} src={props.image} />
      <div className="flex flex-col sm:w-1/2">
        <div className="flex-1 w-full justify-start text-start">
          <p className=" text-md sm:text-xl">{props.title}</p>
          <p className=" text-sm sm:text-md">{props.description}</p>
        </div>
        <div className="flex flex-row justify-end items-end text-end sm:my-12 space-x-6">
          <a className="btn btn-ghost hover:text-info" href={props.link_git}>
            <BsGithub size={32} />
          </a>
          <a className="btn btn-ghost hover:text-info" href={props.link_site}>
            <BiLinkExternal size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}
