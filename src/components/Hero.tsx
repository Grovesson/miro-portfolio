import portrait from "../assets/miro.jpg"

const Hero = () => {
    return (
        <div className="@container flex flex-col items-center p-12 pt-32">
            <img
                src={portrait}
                alt="Portrait"
                className="w-96 rounded-full p-8 text-center transition delay-150 duration-300 ease-out sm:grayscale-10 sm:hover:scale-110 sm:hover:filter-none"
            />
            <h1 className="font-poppins text-4xl font-medium">Miro Lehto</h1>
            <p>IT-Insinööriopiskelija</p>
        </div>
    )
}

export default Hero
