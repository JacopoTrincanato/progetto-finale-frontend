import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import CarInformationBottom from "../components/CarInformationsBottom";
import Optionals from "../components/Optionals";
import CarInformationsTop from "../components/CarInformationsTop";

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
        <div className="container bg-white p-5">

            <div className="container text-center">
                <h1>Detalis of {car.model}</h1>
            </div>

            {/*Car Information Top */}
            <CarInformationsTop urlImage={car.urlImage} description={car.description} />

            {/*Optionals */}
            <Optionals optionals={car.optionals} />

            {/*Car Information Bottom */}
            <CarInformationBottom model={car.model} price={car.price} numberOfDoors={car.numberOfDoors} productionDate={car.productionDate} fuelType={car.fuelType} color={car.color} />


        </div>
    )
}