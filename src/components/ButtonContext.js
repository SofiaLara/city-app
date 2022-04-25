import { useContext } from 'react'
import countContext from "../context/settings";

function Button() { 
    const [context] = useContext(countContext);
    const { setCounter2 } = context;
    const { counter2 } = context;
    return (
        <>
            <button onClick={() => setCounter2(counter2 + 1)}>+</button>
        </>
    )
}

export default Button;