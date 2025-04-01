import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"

const Navigation = () => {
    return (
        <div className="fixed top-0 z-10 w-full bg-white/25 shadow-md backdrop-blur-xs dark:bg-black/25">
            <div className="text-siege-700 dark:text-siege-300 m-auto flex h-16 max-w-[65ch] items-center justify-around px-6 sm:justify-between sm:px-0">
                <a
                    href="#top"
                    className="font-poppins hidden text-lg sm:contents"
                >
                    Miro Lehto
                </a>
                <ul className="flex gap-3 text-sm underline-offset-5 *:transition *:delay-75 *:duration-150 *:ease-out *:hover:scale-120 *:hover:underline sm:gap-6 sm:text-base">
                    <a href="#about" className="cursor-pointer">
                        Tietoa
                    </a>
                    <a href="#experience" className="cursor-pointer">
                        Kokemus
                    </a>
                    <a href="#demo" className="cursor-pointer">
                        Demo
                    </a>
                    <a href="#contact" className="cursor-pointer">
                        Yhteystiedot
                    </a>
                </ul>
                <div className="flex gap-2 text-xl sm:text-3xl">
                    <a
                        href="https://github.com/Grovesson"
                        target="_blank"
                        className="transition delay-75 duration-150 ease-out hover:scale-120"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/miro-v-lehto/"
                        target="_blank"
                        className="transition delay-75 duration-150 ease-out hover:scale-120"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navigation
