import { useNavigate } from "react-router-dom";

export default function CarInformationsTop({ urlImage, description }) {

    //creo una costante che mi permetta di navigare dinamicamente
    const navigate = useNavigate();

    return (
        <>
            <section className="m-auto mt-5 d-flex gap-3 border border-lighter p-4 rounded">

                <img src={urlImage} className="w-50" />
                <div className="car-informations-top">
                    <h3 className="mb-3">Description: {description}</h3>
                    <button onClick={() => navigate(-1)} className="btn btn-light mt-3">Back to cars page</button>
                </div>

            </section>
        </>
    )
}