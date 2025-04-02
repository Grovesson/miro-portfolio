import { useState } from "react"

const PhoneNumber = () => {
    const [revealed, setRevealed] = useState(false)

    return (
        <p className="">
            Puhelinnumero:{" "}
            {!revealed ? (
                <button
                    onClick={() => setRevealed(true)}
                    className="bg-grove-500/10 text-grove-500 hover:text-grove-700 dark:hover:text-grove-100 dark:text-grove-300 cursor-pointer rounded-md border border-white/40 px-2 py-1 drop-shadow-md"
                >
                    Näytä numero
                </button>
            ) : (
                <button
                    onClick={() => setRevealed(false)}
                    className="bg-grove-500/10 text-grove-500 hover:text-grove-700 dark:hover:text-grove-100 dark:text-grove-300 cursor-pointer rounded-md border border-white/40 px-2 py-1 drop-shadow-md"
                >
                    0400 269 669
                </button>
            )}
        </p>
    )
}

const Contact = () => {
    return (
        <div id="contact" className="@container bg-gradient-to-t p-12">
            <div className="m-auto flex max-w-[65ch] flex-col items-center gap-6">
                <h2 className="text-2xl">Yhteystiedot</h2>
                <PhoneNumber />
                <p>
                    Sähköposti:{" "}
                    <a
                        href="mailto:miro.v.lehto@gmail.com"
                        className="text-neutral-500 hover:underline"
                    >
                        miro.v.lehto@gmail.com
                    </a>
                </p>
                <p>
                    LinkedIn:{" "}
                    <a
                        href="https://www.linkedin.com/in/miro-v-lehto/"
                        className="text-neutral-500 hover:underline"
                    >
                        Miro Lehto
                    </a>
                </p>
                <p className="bg-grove-500/10 text-grove-500 hover:text-grove-700 dark:hover:text-grove-100 dark:text-grove-300 cursor-pointer rounded-md border border-white/40 px-2 py-1 drop-shadow-md transition delay-75 duration-150 ease-out hover:scale-110">
                    <a href="#top" className="">
                        Takaisin ylös
                    </a>
                </p>
                <p>© 2025 Miro Lehto. All rights reserved.</p>
                <p>
                    Built with{" "}
                    <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        React
                    </a>
                    ,{" "}
                    <a
                        href="https://vitejs.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        Vite
                    </a>
                    ,{" "}
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        Tailwind CSS
                    </a>
                    , and{" "}
                    <a
                        href="https://react-icons.github.io/react-icons/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        React Icons
                    </a>
                    .
                </p>
            </div>
        </div>
    )
}

export default Contact
