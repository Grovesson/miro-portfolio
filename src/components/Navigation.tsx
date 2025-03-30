import { useState, useEffect } from "react"

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 512) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 z-50 w-full bg-white/25 shadow-md backdrop-blur-xs dark:bg-black/25">
            <div className="m-auto flex max-w-[65ch] justify-between px-12 py-4 text-sm underline-offset-3 *:hover:underline sm:px-0 sm:text-base">
                <a href="#top" className="font-bold">
                    {scrolled ? <i className="fa-solid fa-arrow-up"></i> : "ML"}
                </a>
                <a href="#about" className="cursor-pointer">
                    Tietoa
                </a>
                <a href="#experience" className="cursor-pointer">
                    Kokemus
                </a>
                <a href="#contact" className="cursor-pointer">
                    Yhteystiedot
                </a>
                <a
                    href="https://www.linkedin.com/in/miro-v-lehto/"
                    className="hover:text-neutral-50 hover:underline"
                >
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                </a>
            </div>
        </div>
    )
}

export default Navigation
