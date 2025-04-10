import { useNavigate } from "react-router-dom";

export default function CarInformationsTop({ urlImage, description }) {

    //creo una costante che mi permetta di navigare dinamicamente
    const navigate = useNavigate();

    return (
        <section className="row align-items-center mb-5">
            <div className="col-md-6">
                <img src={urlImage} className="img-fluid rounded shadow" alt="Car" />
            </div>
            <div className="col-md-6">
                <h3 className="mb-4">Description</h3>
                <p className="lead">{description}</p>
                <button onClick={() => navigate(-1)} className="btn btn-outline-secondary mt-3">Back to cars page</button>
            </div>
        </section>
    );
}