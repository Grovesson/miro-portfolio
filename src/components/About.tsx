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
                Kehityksen vahvuuteni on erityisesti Web-kehitys. Olen
                työskennellyt useiden projektien parissa, joissa olen käyttänyt
                mm. Reactia, WordPressiä, TypeScriptiä, NodeJS:ää ja Viteä.
            </p>
            <p>
                Web-kehityksen ulkopuolelta olen toteuttanut myös projekteja
                esimerkiksi robotiikan, karttasovelluksien ja videopelien
                parissa.
            </p>
        </div>
    )
}

export default About
