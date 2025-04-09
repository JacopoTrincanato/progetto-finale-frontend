export default function CarInformationBottom({ model, price, numberOfDoors, productionDate, fuelType }) {

    return (
        <>
            <section className="car-informations-bottom mx-auto mt-5">
                <div className="row d-flex justify-content-around border border-lighter rounded p-2">
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Model:</p>
                            <h3 className="mb-3">{model}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Price:</p>
                            <h3 className="mb-3">{price} &euro;</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Number of doors:</p>
                            <h3 className="mb-3">{numberOfDoors}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Production date:</p>
                            <h3 className="mb-3">{productionDate}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <p>Fuel Type:</p>
                            <h3 className="mb-3">{fuelType}</h3>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}