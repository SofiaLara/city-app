
import { useState } from 'react';
import Card from './components/Card';
import Switch from './components/Switch';

function ToggleApp() { 
    const [toggle, setToggle] = useState(false);

    //easiest way
    const handleToggle = () => { 
        setToggle( !toggle ); 
    }

    //using prev state
    // const handleToggle = () => { 
    //     setToggle((prevState) => (
    //         !prevState
    //     )); 
    // }

    const cardDetails = {
        name: 'BRUCE WAYNE',
        number: toggle ? '1234 1234 1234 1234' : 'xxxx xxxx xxxx xxxx',
        exp: '10/22',
        cvv: '123',
    }

    return (
        <>
            <Card details={cardDetails}/>
            <Switch touched={handleToggle} toggle={toggle}/>
        </>
    )

};

export default ToggleApp;