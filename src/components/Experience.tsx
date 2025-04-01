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
import { FaFigma } from "react-icons/fa"
import { SiCanva } from "react-icons/si"
import { SiAdobephotoshop } from "react-icons/si"
import { SiDavinciresolve } from "react-icons/si"
const experience = () => {
    return (
        <div id="experience" className="@container p-12">
            <div className="m-auto flex max-w-[65ch] flex-col items-center gap-6">
                <h2 className="text-2xl">Kokemus</h2>
                <div className="grid w-full max-w-[65ch] grid-cols-2 gap-y-6 pb-6 text-center *:px-4 *:text-3xl sm:px-0">
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
                    <div className="flex flex-col gap-4">
                        <h2 className="">Media</h2>

                        <div className="flex justify-around">
                            <FaFigma />
                            <SiCanva />
                            <SiAdobephotoshop />
                            <SiDavinciresolve />
                        </div>
                    </div>
                </div>
                {/* <p>
                    Olen vahvimmillani kehityksen luovissa osa-alueissa.
                    Toimivat ja kauniit{" "}
                    <b>käyttöliittymät syntyvät minulta luontevasti</b>, ja
                    niiden toteuttaminen sujuu ideasta koodiin.
                </p>
                <p>
                    Käyttökokemus ei perustu vain ulkonäköön – nopea ja
                    turvallinen back-end on olennainen osa toimivaa palvelua.
                    <b>Panostan sujuvuuteen</b> ja varmistan, että työni täyttää
                    nämä vaatimukset.
                </p>
                <p>
                    Ohjelmoin{" "}
                    <b>selkeää, tehokasta ja helposti ylläpidettävää koodia</b>{" "}
                    hyödyntäen parhaita käytäntöjä. Ratkaisen ongelmia
                    loogisesti ja valitsen teknologiat tarpeen mukaan.
                    Tiimityössä minulla on vahvat valmiudet.
                </p> */}
            </div>
        </div>
    )
}

export default experience
