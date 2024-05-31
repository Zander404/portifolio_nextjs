import { BsCircle, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function SocialMedia(){
    return(
        <div className="flex flex-col justify-center items-center fixed m-10 space-y-2 invisible sm:visible sm:h-screen z-30">
            <div className="text-accent py-2">
                <BsCircle size={64} />
            </div>
            <div className="mx-2 h-32 w-1 bg-accent"></div>
            <div className="flex flex-col text-accent space-y-3">
                <a href={"https://github.com/Zander404"}><BsGithub size={32}/></a>
                <a href={'https://www.instagram.com/xandy_tradicional/'}><BsInstagram size={32}/></a>
                <a href={"https://www.linkedin.com/in/alexandre-arthur-30/"}><BsLinkedin size={32}/></a>
            </div>
            <div className="mx-2 h-96 w-1 bg-accent z-10"></div>
        </div>
    )
}