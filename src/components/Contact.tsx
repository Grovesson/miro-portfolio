import React from "react"

const Contact = () => {
    return (
        <div className="@container p-12">
            <div className="m-auto flex max-w-[65ch] flex-col items-center gap-6">
                <h2 id="contact" className="text-2xl">
                    Yhteystiedot
                </h2>
                <p>Puhelinnumero: 0400269669</p>
                <p>
                    Sähköposti:{" "}
                    <a
                        href="mailto:miro.v.lehto@gmail.com"
                        className="text-neutral-500 hover:underline"
                    >
                        miro.v.lehto@gmail.com
                    </a>
                </p>
                <p>
                    LinkedIn:{" "}
                    <a
                        href="https://www.linkedin.com/in/miro-v-lehto/"
                        className="text-neutral-500 hover:underline"
                    >
                        Miro Lehto
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Contact
