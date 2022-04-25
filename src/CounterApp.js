import { useState } from "react";
import Button from './components/Button'
import ButtonContext from './components/Button'
import countContext from "./context/settings";

function CounterApp() { 
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    return (
        <div>
            <p>First exercise using render props from child to parent</p>
            <p>{counter}</p>
            <Button onClick={setCounter} counter={counter} />

            <p>Second exercise using Context hook from child to parent</p>
            <countContext.Provider value={{counter2, setCounter2}}>
                <p>{counter2}</p>
                <ButtonContext onClick={setCounter2} counter={counter2} />
            </countContext.Provider>
        </div>
    )
}

export default CounterApp;