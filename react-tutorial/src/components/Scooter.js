import { useState } from "react";

function Scooter() {
    const [scooter,setScooter ] = useState(
        {
            brand: "Honda",
            model: "Activa",
            color: "Red",
            price: 75000
        }
    );

function updateColor() {
        setScooter((prevScooter) => {
            return {
                ...prevScooter,
                color: "Black"}
        })

    }

    return (
        <>
            <h1>Brand: {scooter.brand}</h1>
            <h2>Model: {scooter.model}</h2>
            <h3>Color: {scooter.color}</h3>
            <h4>Price: {scooter.price}</h4>
            <button onClick={updateColor}>Change Color to Black</button>
        </>
    )
}

export default Scooter