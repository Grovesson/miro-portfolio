import portrait from "./assets/miro.jpg"
import "./App.css"

function App() {
    return (
        <body className="font-(family-name:--font-quicksand) bg-neutral-300 pt-6 text-neutral-900 transition delay-150 duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200">
            <div className="@container">
                <div className="m-auto flex max-w-[65ch] justify-between px-12 text-sm *:transition *:duration-300 *:hover:scale-110 *:hover:font-semibold sm:px-0 sm:text-base">
                    <h1 className="font-medium">ML</h1>
                    <a href="#info">Tietoa</a>
                    <a href="#exp">Kokemus</a>
                    <a href="#contact">Yhteystiedot</a>
                    <a
                        href="https://www.linkedin.com/in/miro-v-lehto/"
                        className="*:hover:text-neutral-50 *:hover:underline"
                    >
                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                </div>
            </div>
            <div className="@container flex flex-col items-center">
                <img
                    src={portrait}
                    alt="Portrait"
                    className="w-96 rounded-full p-12 transition delay-150 duration-300 sm:grayscale sm:hover:scale-110 sm:hover:filter-none"
                />
                <h1 className="text-4xl font-medium">Miro Lehto</h1>
                <p>IT-Insinööriopiskelija</p>
            </div>
            <div
                id="info"
                className="@container flex flex-col gap-6 p-12 *:m-auto *:max-w-[65ch]"
            >
                <p>
                    Hei! Nimeni on Miro ja olen 23 vuotias
                    IT-Insinööriopiskelija Jyväskylästä. Opiskelen kolmatta
                    vuotta ja tutkinnon yleisien kurssien jälkeen erikoistuin
                    kehitykseen, mistä olen tykännyt erittäin paljon. Kurssien
                    aikana olen tehnyt paljon sovelluksia ja verkkosivuja,
                    joiden tarkoitus on ollut opettaa minulle työtapoja, sekä
                    teknologioita, mitä työelämässä hyödynnetään. Useat
                    tutkinnon palautukset tehdään Git- versionhallinnan avulla,
                    joten Gitin käyttö on tullut tutuksi. Tämän nettisivun
                    tarkoitus on esitellä osaamistani.
                </p>
                <p>
                    Vapaa-ajalla puuhailen myös paljon tietokoneiden parissa ja
                    tämän kautta minun yleinen IT-osaaminen on hyvällä tasolla.
                    Löydän itseni usein auttamassa läheisiäni heidän
                    ongelmissaan laitteiden kanssa ja se on auttanut myös minua
                    useissa paikoissa. Erityisesti 3D-mallinnus ja pelien
                    kehitys ovat lähiaikina kiinnostaneet minua.
                </p>
                <p>
                    Muita taitoja minulta löytyy myös musiikin, piirtämisen ja
                    valokuvauksen parista. Tykkään myös tasapainottaa elämääni
                    urheilun avulla ja käynkin salilla ja lenkkeilemässä
                    viikottain.
                </p>
            </div>
            <div className="@container p-12">
                <div className="m-auto flex max-w-[65ch] flex-col items-center gap-6">
                    <h2 id="exp" className="text-2xl">
                        Kokemus
                    </h2>
                    <p>
                        Eniten kokemusta minulla on verkkosivujen tekemisestä ja
                        siihen liittyvistä teknologioista. HTML ja CSS ovat
                        hyvin yksinkertaisia työkaluja, mutta niiden syvällinen
                        osaaminen mahdollistaa kaikkien muiden teknologioiden
                        sulavan käytön.
                    </p>
                    <p>
                        Olen rakentanut myös WordPressillä nettisivuja, hyvä
                        esimerkki tästä on{" "}
                        <a href="https://jio.fi" className="underline">
                            JIOn verkkosivut
                        </a>{" "}
                        , jossa olen ollut mukana kehittämässä ja tällä hetkellä
                        vastuussa. Suunnittelutyökaluna käytän Figmaa, millä
                        osaan nopeasti tehdä moderneja sekä toimivia
                        käyttöliittymiä.
                    </p>
                    <p>
                        JavaScriptillä olen rakentanut ison osan sivujeni
                        toiminnallisuudesta, mutta aika nopeasti siirryin siitä
                        Reactiin ja muihin työkaluihin, mitkä antavat vielä
                        enemmän mahdollisia ominaisuuksia. Tämä nettisivu on
                        rakennettu Reactilla ja TypeScriptillä, mikä takaa
                        helpon ja turvallisen kehittämisen tulevaisuudessa.
                    </p>
                    <p>
                        Sivun rakennus työkaluna hyödynnän Viteä, mikä on
                        salaman nopea tapa saada projekti kiskoille ja sen
                        kautta on todella helppo lähteä lisäämään ominaisuuksia
                        ja toiminnallisuutta projektiin. Itse sivut hostaan
                        GitHubin kätevässä Pages ominaisuudessa. Pelkkä "npm run
                        deploy" konsoliin ja nettisivut päivittyvät itsestään.
                        Tämän kautta hoituu myös automaattinen versionhallinta.
                        TailWindCSS 4.0 on myös täysin tuettu Vitessä ja sen
                        mukana tulee kaikki lisät VS Codeen, kuten optimoitu
                        linttaus ja automaattinen täydennys.
                    </p>
                    <p>
                        Osana tutkintoa on myös ollut usea kurssi, missä
                        keskitytään Back End- devaukseen. API avainten ja
                        tietokantojen lisääminen projekteihin on ollut arkea ja
                        niiden kautta olen rakentanut esimerkiksi
                        elokuvakirjastoja, sekä karttasovelluksia. CRUD
                        toiminnallisuuksein rakentaminen ja esimerkiksi
                        kirjautumisien operointi on hallussa.
                    </p>
                    <p>
                        Tietokantoja olemme myös päässeet harjoittelemaan.
                        Teknologiat kuten MySQL ja MongoDB ovat olleet iso osa
                        kursseja.
                    </p>
                    <p>
                        Ohjelmointikieliä on ollut useita tutkinnon aikana.
                        Esimerkiksi C#, C++, Elixir ja Python ovat olleet
                        raskaassa käytössä. Esimerkiksi olen rakentanut ja
                        ohjelmoinut radio-ohjattavan tai tekoälyllä ajavan
                        auton. Autossa oli akkuvirralla pyörivät moottorit ja
                        sensorit jotka kiinnitin RaspberryPihin, johon tein
                        tarvittavat ohjelmistot.{" "}
                    </p>
                    <p>
                        Myös fyysisten toteutuksien puoli on minulla hallussa.
                        Tietokoneiden ja muiden laitteiden rakentaminen on
                        minulle tuttua ja saan usein pyyntöjä esimerkiksi tulla
                        rakentamaan tietokoneen.
                    </p>
                    <p>
                        Yleisesti osaamiseni kaikista ITn osa-alueista on
                        hyvällä mallilla ja olen saanut kaiken irti koulun
                        antamista opeista. Minun on kuitenkin tarkoitus oppia
                        vielä paljon enemmän ja siirtyä koulun penkiltä
                        toimistolle.
                    </p>
                    <div className="flex gap-12 text-2xl">
                        <i className="fa-brands fa-html5"></i>
                        <i className="fa-brands fa-css3-alt"></i>
                        <i className="fa-brands fa-wordpress-simple"></i>
                        <i className="fa-brands fa-js"></i>
                        <i className="fa-brands fa-react"></i>
                        <i className="fa-brands fa-git-alt"></i>
                        <i className="fa-brands fa-node-js"></i>
                        <i className="fa-solid fa-database"></i>
                        <i className="fa-brands fa-python"></i>
                    </div>
                </div>
            </div>
            <div className="@container p-12">
                <div className="m-auto flex max-w-[65ch] flex-col items-center gap-6">
                    <h2 id="contact" className="text-2xl">
                        Yhteystiedot
                    </h2>
                    <p>Puhelinnumero: 0400269669</p>
                    <p>Sähköposti: miro.v.lehto@gmail.com</p>
                    <p>
                        LinkedIn:{" "}
                        <a
                            href="https://www.linkedin.com/in/miro-v-lehto/"
                            className="underline"
                        >
                            Miro Lehto
                        </a>
                    </p>
                </div>
            </div>
        </body>
    )
}

export default App
