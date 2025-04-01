import React from "react"

type DemoCardProps = {
    href: string
    imageSrc: string
    imageAlt: string
    text: string
}

const DemoCard: React.FC<DemoCardProps> = ({
    href,
    imageSrc,
    imageAlt,
    text,
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-grove-300 from-grove-300/10 to-grove-400/20 flex max-w-[16ch] flex-col gap-6 rounded-md border bg-gradient-to-br text-center drop-shadow-lg backdrop-blur-lg transition delay-150 duration-300 ease-out sm:hover:scale-110 dark:border-white/20 dark:from-white/10 dark:to-white/20"
        >
            <img src={imageSrc} alt={imageAlt} className="h-full" />
            <p className="">{text}</p>
        </a>
    )
}

export default DemoCard
