import Car from './Car';

function Garage() {

    const CarList =[
        { brand: 'Ford', model: 'Mustang', color: 'red' },
        { brand: 'Honda', model: 'Civic', color: 'blue' },
        { brand: 'Toyota', model: 'Camry', color: 'black' },
        { brand: 'Tesla', model: 'Model 3', color: 'white' }


    ];
    return (
        <>
            <h1>Garage is used to store
            <ul>
                {CarList.map((car, index) => (
                    <li key={index}>
                        {car.brand} {car.model} {car.color}
                    </li>
                ))}     
            </ul>
            </h1>
            <Car />
        </>
    )
}
export default Garage