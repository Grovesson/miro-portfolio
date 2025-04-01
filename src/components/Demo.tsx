import fakestore from "../assets/fakestore.png"
const Demo = () => {
    return (
        <div
            id="demo"
            className="@container flex flex-col gap-6 bg-cover bg-center bg-no-repeat p-12 *:m-auto *:max-w-[65ch]"
        >
            <h2 className="font-poppins text-2xl">Demo projektit</h2>
            <p>Tarkemmit pääset tutustumaan osaamiseeni näillä demoilla:</p>
            <div className="grid grid-cols-1 *:p-6 sm:grid-cols-3">
                <div className="border-grove-300 from-grove-300/10 to-grove-400/20 flex max-w-[16ch] flex-col gap-6 rounded-md border bg-gradient-to-br text-center drop-shadow-lg backdrop-blur-lg transition delay-150 duration-300 ease-out sm:hover:scale-110 dark:border-white/20 dark:from-white/10 dark:to-white/20">
                    <a href="#top" target="_blank">
                        <img
                            src={fakestore}
                            alt="FakeStore logo."
                            className=""
                        />
                    </a>
                    <a href="https://fakestoreapi.com/" target="_blank">
                        Fake Store
                    </a>
                </div>
                <div className="col-span-2 animate-pulse self-center text-center text-xl">
                    <h1>Lisää tulossa...🛠️</h1>
                </div>
            </div>
        </div>
    )
}

export default Demo
