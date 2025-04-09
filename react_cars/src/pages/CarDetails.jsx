import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CarDetails() {

    //creo una costante per la car
    const [car, setCar] = useState({});

    //creo una costante per lo stato dei bottoni
    const [active, setActive] = useState(null)

    //ottengo il parametro id dal path
    const { id } = useParams();

    //richiamo l'url 
    const { apiUrl } = useContext(GlobalContext);

    //fetch dei dati
    function fetchData(url = `${apiUrl}/${id}`) {
        axios.get(url)
            .then(res => {
                console.log(res.data);
                const carData = res.data;
                setCar(carData);
            })
            .catch(err => console.error(err)
            )

    }

    //faccio la chiamata solo al caricamento del componente
    useEffect(fetchData, []);

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
        <div className="container bg-white p-5">

            <div className="container text-center">
                <h1>Detalis of {car.model}</h1>
            </div>

            <section className="m-auto mt-5 d-flex gap-3">

                <img src={car.urlImage} className="w-50" />
                <div className="car-informations-top">
                    <h3 className="mb-3">Description: {car.description}</h3>

                </div>

            </section>

            <section className="optionals mx-auto mt-5">

                <h2 className="text-center">Optionals:</h2>

                {car.optionals?.length > 0 ? (
                    <div className="row d-flex justify-content-around rounded p-2">

                        {car.optionals.map((optional, index) => (
                            <div className="accordion-item col-md-3">
                                <button key={optional.id} onClick={handleClick} data-index={index} className="btn btn-light">
                                    {optional.name}
                                </button>

                                <h6 className={active == index ? 'active' : 'hide'}>{optional.description}</h6>
                            </div>
                        ))}

                    </div>
                ) : (
                    <div className="alert alert-warning">
                        <h3>This car hasn't got optionals</h3>
                    </div>
                )}

            </section>

            <section className="car-informations-bottom mx-auto mt-5">
                <div className="row d-flex justify-content-around border border-lighter rounded p-2">
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Model:</p>
                            <h3 className="mb-3">{car.model}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Price:</p>
                            <h3 className="mb-3">{car.price} &euro;</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Number of doors:</p>
                            <h3 className="mb-3">{car.numberOfDoors}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Production date:</p>
                            <h3 className="mb-3">{car.productionDate}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Fuel Type:</p>
                            <h3 className="mb-3">{car.fuelType}</h3>
                        </div>
                    </div>
                </div>

            </section>


        </div>
    )
}