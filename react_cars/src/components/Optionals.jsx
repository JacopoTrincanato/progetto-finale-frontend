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
        <section className="mt-5 p-4 bg-light rounded shadow">
            <h2 className="text-center mb-4">Optionals</h2>

            {optionals?.length > 0 ? (
                <div className="row g-3">
                    {optionals.map((optional, index) => (
                        <div key={optional.id} className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <button onClick={handleClick} data-index={index} className="btn btn-primary w-100 mb-3">
                                        {optional.name}
                                    </button>
                                    <p className={active != index ? 'hide' : ''}>{optional.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="alert alert-warning text-center">
                    <h5>This car hasn't got optionals</h5>
                </div>
            )}
        </section>
    );

}