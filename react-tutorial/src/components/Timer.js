import { useEffect,useState } from "react";

function Timer() {
    useEffect(() => {
        console.log("Screen Rendering")

        setTimeout(() => {
            setCount((previousState) => {return previousState + 1})
        }, 9000)

        
    })

    const [count,setCount] = useState(0);

    function updateCount() {
        setCount((previousState) => {return previousState + 1});
    }

    return <>
    <h1>I have rendered {count} times</h1>
    <button onClick={updateCount}>Click Me</button>
    </>
}
export default Timer;