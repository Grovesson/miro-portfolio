import fakestore from "../assets/fakestore.png"
const Demo = () => {
    return (
        <div
            id="demo"
            className="@container flex flex-col gap-6 bg-cover bg-center bg-no-repeat p-12 *:m-auto *:max-w-[65ch]"
        >
            <h2 className="font-poppins text-2xl">Demo projektit</h2>
            <p>
                Haluatte varmasti nähdä enemmän esimerkkejä osaamisestani -
                tässä on muutama:
            </p>
            <div className="grid grid-cols-3 *:p-6">
                <div className="flex flex-col gap-6 rounded-md border border-white/40 bg-linear-to-br/oklch from-white/20 to-white/10 text-center drop-shadow-md backdrop-blur-lg">
                    <a href="#top" target="_blank">
                        <img
                            src={fakestore}
                            alt="FakeStore logo."
                            className="max-w-[16ch] transition delay-150 duration-300 ease-out hover:filter-none sm:grayscale sm:hover:scale-110 sm:hover:filter-none"
                        />
                    </a>
                    <a href="https://fakestoreapi.com/" target="_blank">
                        Fake Store
                    </a>
                </div>
                <div className="col-span-2 self-center text-center">
                    <h1>Lisää tulossa...</h1>
                </div>
            </div>
        </div>
    )
}

export default Demo
