import React from "react"

const experience = () => {
    return (
        <div className="@container p-12">
            <div className="m-auto flex max-w-[65ch] flex-col items-center gap-6">
                <h2 id="experience" className="text-2xl">
                    Kokemus
                </h2>
                <div className="flex flex-wrap justify-center gap-12 text-2xl">
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
                <p>
                    Minulla on eniten kokemusta verkkosivujen tekemisestä ja
                    niihin liittyvistä teknologioista. HTML ja CSS ovat
                    yksinkertaisia työkaluja, mutta niiden syvällinen osaaminen
                    mahdollistaa kaikkien muiden teknologioiden sulavan käytön.
                </p>
                <p>
                    Olen rakentanut myös WordPressillä nettisivuja. Hyvä
                    esimerkki tästä on
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
                </p>
            </div>
        </div>
    )
}

export default experience
