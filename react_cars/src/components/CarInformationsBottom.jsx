export default function CarInformationBottom({ model, price, numberOfDoors, productionDate, fuelType, color }) {

    //formattazione data
    const dateOfProduction = new Date(productionDate).toLocaleDateString("it-IT");

    return (
        <>
            <section className="car-informations-bottom mx-auto mt-5">
                <h2 className="text-center mb-5">Other Details</h2>
                <div className="row d-flex justify-content-around border border-lighter rounded p-2 g-4">
                    <div className="col-md-4">
                        <div className="border rounded p-3 text-center h-100 shadow-sm">
                            <p>Model:</p>
                            <h3 className="mb-3">{model}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border rounded p-3 text-center h-100 shadow-sm">
                            <p>Price:</p>
                            <h3 className="mb-3">{price} &euro;</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border rounded p-3 text-center h-100 shadow-sm">
                            <p>Number of doors:</p>
                            <h3 className="mb-3">{numberOfDoors}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border rounded p-3 text-center h-100 shadow-sm">
                            <p>Production date:</p>
                            <h3 className="mb-3">{dateOfProduction}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border rounded p-3 text-center h-100 shadow-sm">
                            <p>Fuel Type:</p>
                            <h3 className="mb-3">{fuelType}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border rounded p-3 text-center h-100 shadow-sm">
                            <p>Color:</p>
                            <h3 className="mb-3">{color}</h3>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}