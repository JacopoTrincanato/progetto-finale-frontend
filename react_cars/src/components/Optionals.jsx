import { useState } from "react"

export default function Optionals({ optionals }) {

    //creo una costante per lo stato dei bottoni
    const [active, setActive] = useState(null)

    //funzione che reagisce al click del bottone
    function handleClick(e) {

        const newActive = e.target.getAttribute('data-index')

        setActive(newActive)

        //per richiuderle al click
        if (active == newActive) {
            setActive(null)
        }
    }

    return (
        <>
            <section className="optionals mx-auto mt-5 rounded p-4">

                <h2 className="text-center">Optionals:</h2>

                {optionals?.length > 0 ? (
                    <div className="row d-flex justify-content-around p-2">

                        {optionals.map((optional, index) => (
                            <div key={optional.id} className="accordion-item col-md-3">
                                <button onClick={handleClick} data-index={index} className="btn btn-light my-3">
                                    {optional.name}
                                </button>

                                <h6 className={active != index ? 'hide' : ''}>{optional.description}</h6>
                            </div>
                        ))}

                    </div>
                ) : (
                    <div className="alert alert-warning">
                        <h3>This car hasn't got optionals</h3>
                    </div>
                )}

            </section>
        </>
    )
}