import portrait from "../assets/miro.jpg"
import Stats from "./Stats"

const Hero = () => {
    return (
        <div className="@container *:m-auto">
            <div className="flex max-w-[65ch] flex-col items-center justify-center gap-6 p-12 text-center">
                <div className="h-16"></div>
                <img
                    src={portrait}
                    alt="Portrait"
                    className="w-64 rounded-full text-center transition delay-150 duration-300 ease-out sm:w-96 sm:grayscale-10 sm:hover:scale-110 sm:hover:filter-none"
                />
                <div>
                    <h1 className="text-4xl font-medium">Miro Lehto</h1>
                    <p>IT-Insinööriopiskelija | Web-kehittäjä</p>
                </div>
                <Stats />
            </div>
        </div>
    )
}

export default Hero
