import { FaHtml5 } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { GrWordpress } from "react-icons/gr"
import { FaReact } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { SiVite } from "react-icons/si"
import { TbSql } from "react-icons/tb"
import { RiPhpFill } from "react-icons/ri"
import { TbBrandCpp } from "react-icons/tb"
import { FaPython } from "react-icons/fa"
import { FaJs } from "react-icons/fa"
import { SiElixir } from "react-icons/si"
import { FaFigma } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiDavinciresolve } from "react-icons/si";
const experience = () => {
    return (
        <div id="experience" className="@container p-12">
            <div className="m-auto flex max-w-[65ch] flex-col items-center gap-6">
                <h2 className="font-poppins text-2xl">Kokemus</h2>
                <div className="font-poppins grid w-full max-w-[65ch] grid-cols-2 gap-y-6 pb-6 text-center font-bold *:px-4 *:text-xl sm:px-0">
                    <div className="flex flex-col gap-4">
                        <h2 className="">Front-End</h2>
                        <div className="flex justify-around">
                            <FaHtml5 />
                            <RiTailwindCssFill />
                            <GrWordpress />
                            <FaReact />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="">Back-End</h2>
                        <div className="flex justify-around">
                            <FaNodeJs />
                            <SiVite />
                            <TbSql />
                            <RiPhpFill />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="">Ohjelmointi</h2>
                        
                        <div className="flex justify-around">
                            <TbBrandCpp />
                            <FaPython />
                            <FaJs />
                            <SiElixir />
                        </div>
                    </div>
                    <div className=" flex flex-col gap-4">
                        <h2 className="">Media</h2>
                        
                        <div className="flex justify-around">
                            <FaFigma />
                            <SiCanva />
                            <SiAdobephotoshop />
                            <SiDavinciresolve />
                        </div>
                    </div>
                </div>
                <p>
                    Vahvuuteni on ehdottomasti kehityksen luovissa osa-alueissa.
                    Toimivat ja kauniit käyttöliittymät tulevat minulta
                    luonnostaan ja nautin niiden tekemisestä. Ideoiden
                    toteuttaminen kuitenkin vaatii vahvaa teknistä osaamista,
                    joka on minulla myös hallussa. Figmasta toimivaan koodiin -
                    minulta se onnistuu.
                </p>
                <p>
                    Kauniilla käyttöliittymällä ei kuitenkaan pääse kauas jos
                    itse palvelun käyttö ei ole sujuvaa. Siksi nopea ja
                    turvallinen back-end on isossa roolissa tämän päivän
                    sähköisissä palveluissa. Nämä asiat ovat minulle tärkeitä ja
                    pidän huolen siitä, että työni täyttää nämä vaatimukset.
                </p>
                <p>
                    Ohjelmoinnissa keskityn selkeään ja tehokkaaseen koodiin,
                    joka on helposti ylläpidettävää ja skaalautuvaa. Käytän
                    parhaita käytäntöjä, kuten modulaarisuutta, testivetoista
                    kehitystä ja suunnittelumalleja. Ratkaisen ongelmia
                    loogisesti ja valitsen teknologiat aina tarpeen mukaan.
                    Projektit ovat kuitenkin usein monen tekijän pyrintö ja
                    tähän omaan erinomaiset valmiudet.
                </p>
                {/* <p>
                    Minulla on eniten kokemusta verkkosivujen tekemisestä ja
                    niihin liittyvistä teknologioista. HTML ja CSS ovat
                    yksinkertaisia työkaluja, mutta niiden syvällinen osaaminen
                    mahdollistaa kaikkien muiden teknologioiden sulavan käytön.
                </p>
                <p>
                    Olen rakentanut myös WordPressillä nettisivuja. Hyvä
                    esimerkki tästä on{" "}
                    <a
                        href="https://jio.fi"
                        className="underline"
                        target="_blank"
                    >
                        JIOn verkkosivut
                    </a>
                    , joiden kehittämisessä olen ollut mukana ja joista olen
                    tällä hetkellä vastuussa. Suunnittelutyökaluna käytän
                    Figmaa, jolla osaan nopeasti luoda moderneja ja toimivia
                    käyttöliittymiä.
                </p>
                <p>
                    JavaScriptillä olen rakentanut suuren osan sivujeni
                    toiminnallisuudesta, mutta siirryin nopeasti Reactiin ja
                    muihin työkaluihin, jotka tarjoavat vielä enemmän
                    mahdollisuuksia. Tämä nettisivu on rakennettu Reactilla ja
                    TypeScriptillä, mikä takaa helpon ja turvallisen
                    kehittämisen tulevaisuudessa.
                </p>
                <p>
                    Sivun rakennustyökaluna hyödynnän Viteä, joka on
                    salamannopea tapa saada projekti käyntiin. Sen avulla on
                    todella helppo lisätä uusia ominaisuuksia ja
                    toiminnallisuuksia projektiin. Itse sivut hostaan GitHubin
                    kätevällä Pages-ominaisuudella. Pelkkä "npm run deploy"
                    konsoliin, ja nettisivut päivittyvät automaattisesti. Tämän
                    kautta hoituu myös automaattinen versionhallinta. Tailwind
                    CSS 4.0 on täysin tuettu Vitessä, ja sen mukana tulee kaikki
                    lisäosat VS Codeen, kuten optimoitu linttaus ja
                    automaattinen täydennys.
                </p>
                <p>
                    Osana tutkintoa on ollut useita kursseja, joissa on
                    keskitytty Back End -kehitykseen. API-avainten ja
                    tietokantojen integroiminen projekteihin on tullut tutuksi,
                    ja niiden avulla olen rakentanut esimerkiksi
                    elokuvakirjastoja sekä karttasovelluksia.
                    CRUD-toiminnallisuuksien toteuttaminen ja
                    kirjautumisjärjestelmien kehittäminen on hallussa.
                </p>
                <p>
                    Tietokantoja olemme päässeet harjoittelemaan useilla
                    kursseilla. Teknologiat kuten MySQL ja MongoDB ovat olleet
                    tärkeä osa opintojani.
                </p>
                <p>
                    Tutkinnon aikana olen käyttänyt useita ohjelmointikieliä.
                    Esimerkiksi C#, C++, Elixir ja Python ovat olleet
                    aktiivisesti käytössä. Olen muun muassa rakentanut ja
                    ohjelmoinut radio-ohjattavan tai tekoälyllä ajavan auton.
                    Autossa oli akkuvirralla toimivat moottorit ja sensorit,
                    jotka kiinnitin Raspberry Pi -alustaan, ja kehitin siihen
                    tarvittavat ohjelmistot.
                </p>
                <p>
                    Myös fyysisten toteutusten puoli on minulla hallussa.
                    Tietokoneiden ja muiden laitteiden rakentaminen on minulle
                    tuttua, ja saan usein pyyntöjä esimerkiksi tietokoneen
                    kokoamiseen.
                </p>
                <p>
                    Yleisesti ottaen IT-osaamiseni on hyvällä tasolla, ja olen
                    saanut kaiken irti koulun tarjoamista opeista.
                    Tarkoituksenani on kuitenkin oppia vielä paljon lisää ja
                    siirtyä koulun penkiltä työelämään.
                </p> */}
            </div>
        </div>
    )
}

export default experience
