const About = () => {
    return (
        <div
            id="about"
            className="bg-siege-500/10 @container flex flex-col gap-6 p-12 drop-shadow-lg *:m-auto *:max-w-[65ch]"
        >
            <h2 className="font-poppins text-2xl">Minusta</h2>
            <p>
                Hei! Nimeni on Miro, ja olen 23-vuotias IT-insinööriopiskelija
                Jyväskylästä. Opiskelen kolmatta vuotta, ja tutkinnon yleisten
                kurssien jälkeen erikoistuin ohjelmistokehitykseen, mistä olen
                tykännyt erittäin paljon. Kurssien aikana olen tehnyt monia
                sovelluksia ja verkkosivuja, joiden tarkoituksena on ollut
                opettaa minulle työtapoja sekä teknologioita, joita työelämässä
                hyödynnetään.
            </p>
            {/* <p>
                Vapaa-ajallani vietän myös paljon aikaa tietokoneiden parissa,
                minkä ansiosta yleinen IT-osaamiseni on hyvällä tasolla. Löydän
                itseni usein auttamassa läheisiäni heidän laiteongelmissaan,
                mikä on hyödyttänyt myös minua monessa tilanteessa. Viime
                aikoina erityisesti 3D-mallinnus ja pelikehitys ovat alkaneet
                kiinnostaa minua.
            </p> */}
            <p>
                Muita taitojani ovat musiikki, piirtäminen ja valokuvaus. Pyrin
                tasapainottamaan elämääni myös liikunnan avulla – käyn salilla
                ja lenkkeilen viikoittain.
            </p>
        </div>
    )
}

export default About
