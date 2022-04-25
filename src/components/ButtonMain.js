import { useState } from 'react';

function ButtonMain(props) { 
    const [value, setValue] = useState(0);

    const handleValues = () => { 
        setValue(Number(value) + Number(props.count));
    }

    return (
        <>
            <button onClick={handleValues}>I'm a btn</button>
            <p>{value}</p>
        </>
    )
}

export default ButtonMain;