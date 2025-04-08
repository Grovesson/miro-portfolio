const About = () => {
    return (
        <div
            id="about"
            className="bg-grove-500/10 @container flex flex-col gap-6 p-12 drop-shadow-lg *:m-auto *:max-w-[65ch]"
        >
            <h2 className="text-2xl">Minusta</h2>
            <p>
                Hei! Nimeni on Miro, ja olen 23-vuotias IT-insinööriopiskelija
                Jyväskylästä. Opiskelen kolmatta vuotta ja erikoistun
                kehitykseen.
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
                Kehityksen vahvuuteni on erityisesti Web-kehitys. Projekteissa
                olen käyttänyt mm. Wordpressiä, Reactia, Vueta, TypeScriptiä,
                NodeJS:ää, Expressiä ja Viteä.
            </p>
            <p>
                Web-kehityksen ulkopuolelta olen toteuttanut myös projekteja
                esimerkiksi robotiikan, karttasovelluksien ja videopelien
                parissa.
            </p>
            <p>
                Uusin projektini on AI Chat bot. Se on
                Node/Express/TypeScript-pohjainen API, joka käyttää{" "}
                <a href="https://getstream.io/chat/">Streamiä</a>{" "}
                keskusteluihin, keskusteluhistoriaan ja käyttäjien hallintaan.
                Käytössä on myös <a href="https://neon.tech/">Neonin</a>{" "}
                tarjoama PostgreSQL-tietokanta käyttäjätietojen ja
                keskusteluhistorian tallentamiseen. Tietokannan kanssa käytetään{" "}
                <a href="https://orm.drizzle.team/">Drizzle ORM:ää</a>.{" "}
                <a href="https://openai.com/">OpenAI</a> toimii tekoälybotin
                moottorina.
            </p>
        </div>
    )
}

export default About
