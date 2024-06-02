import { BsCircle, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function SocialMedia(){
    return(
        <div className="flex flex-col justify-center items-center text-accent fixed m-16 space-y-2 invisible sm:visible sm:h-screen z-30">
            <div className="py-2">
                <BsCircle size={64} />
            </div>
            <div className="mx-2 h-32 w-1 bg-neutral"></div>
            <div className="flex flex-col space-y-3">
                <a href={"https://github.com/Zander404"} className="btn btn-ghost text-accent hover:text-info"><BsGithub size={32}/></a>
                <a href={'https://www.instagram.com/xandy_tradicional/'} className="btn btn-ghost text-accent hover:text-info"><BsInstagram size={32}/></a>
                <a href={"https://www.linkedin.com/in/alexandre-arthur-30/"} className="btn btn-ghost text-accent hover:text-info"><BsLinkedin size={32}/></a>
            </div>
            <div className="mx-2 h-96 w-1 bg-neutral z-10"></div>
        </div>
    )
}