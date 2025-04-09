import { useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { useParams } from "react-router-dom";

export default function CarDetails() {

    //creo una costante per la car
    const [car, setCar] = useState({});

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

    return (
        <>

            <div className="container text-center mt-3">
                <h1>Detalis of {car.model}</h1>
            </div>

            <section className="container m-auto mt-3 p-4 d-flex gap-3 bg-white">

                <img src={car.urlImage} className="w-50" />
                <div className="car-informations-top">
                    <h3 className="mb-3">Description: {car.description}</h3>
                    <div unless="${car.getOptionals().size() > 0}">
                        {car.optionals ?

                            <div>
                                <h3>Optionals:</h3>
                                <h3 each="optional : *{optionals}">{car.optionals}</h3>
                            </div> :

                            <div className="alert alert-warning">
                                <h3>This car hasn't got optionals</h3>
                            </div>
                        }

                    </div>

                </div>

            </section>

            <section className="car-informations container m-auto p-4 gap-3 bg-white">
                <div className="row d-flex justify-content-around border border-lighter rounded p-2">
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Model:</p>
                            <h3 className="mb-3">[[*{model}]]</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Price:</p>
                            <h3 className="mb-3">[[*{price}]] &euro;</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Number of doors:</p>
                            <h3 className="mb-3">[[*{numberOfDoors}]]</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Production date:</p>
                            <h3 className="mb-3">[[*{productionDate}]]</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Fuel Type:</p>
                            <h3 className="mb-3">[[*{fuelType}]]</h3>
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}