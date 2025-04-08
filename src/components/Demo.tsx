// import fakestore from "../assets/fakestore.png"
import jio from "../assets/jio.svg"
import robot from "../assets/robot.png"
import vite from "../assets/vite.svg"
import DemoCard from "./DemoCard"
const Demo = () => {
    return (
        <div
            id="demo"
            className="@container flex flex-col gap-6 bg-cover bg-center bg-no-repeat px-12 *:m-auto *:max-w-[65ch]"
        >
            <p className="text-center">
                Tarkemmit pääset tutustumaan osaamiseeni näillä projekteilla:
            </p>
            <div className="grid grid-cols-1 gap-6 *:m-auto *:h-full *:w-full *:p-6 sm:grid-cols-3">
                {/* <DemoCard
                    href="https://fakestoreapi.com/"
                    imageSrc={fakestore}
                    imageAlt="Fake Store logo"
                    text="Fake Store"
                /> */}

                <DemoCard
                    href="https://jio.fi/"
                    imageSrc={jio}
                    imageAlt="JIOn logo"
                    text="JIO.fi"
                />
                <DemoCard
                    href="https://chat-ai-ui-murex.vercel.app/"
                    imageSrc={robot}
                    imageAlt="Robotti"
                    text="AI Keskustelu sovellus"
                />
                <DemoCard
                    href=""
                    imageSrc={vite}
                    imageAlt=""
                    text="Lisää tulossa"
                />
            </div>
        </div>
    )
}

export default Demo
