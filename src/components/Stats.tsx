const Stats = () => {
    return (
        <div className="@container m-auto grid max-w-[65ch] grid-cols-1 gap-6 p-6 *:text-center sm:grid-cols-3 sm:p-12">
            <div className="flex flex-col">
                <h2 className="font-poppins text-2xl font-bold">6+</h2>
                <p>Vuotta alan töitä ja opintoja.</p>
            </div>
            <div className="flex flex-col">
                <h2 className="font-poppins text-2xl font-bold">10+</h2>
                <p>Nettisivua ja sovellusta rakennettu.</p>
            </div>
            <div className="flex flex-col">
                <h2 className="font-poppins text-2xl font-bold">5+</h2>
                <p>Ohjelmointikieltä.</p>
            </div>
        </div>
    )
}

export default Stats
