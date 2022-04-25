import { useState } from 'react'

function ListApp() { 
    const [item, setItem] = useState('');
    const [myList, setList] = useState([]);

    const handleItem = (e) => {
        if (e.currentTarget.value.length > 0) {
            setItem(e.currentTarget.value);
        }
    }

    const handleClick = () => { 
        if (item.length > 0) { 
            setList([...myList, item]);
            setItem('');
        }
    }

    const handleDelete = (e) => { 
        //This is another non ES6 way of doing it
        e.currentTarget.remove();
        //Filter returns a new array without the rule we pass. 
        //In this case, all elements that don't equal the lis item.
        //We don't want to use this because it will delete all elements that are equal, not just the one we clicked on.
        //setList(myList.filter((el) => el !== lis));
    }

    return (
        <>
            <input onChange={handleItem} value={item}></input>
            <button onClick={handleClick}>Add Item</button>
            <ul>
                {myList.map((lis, index) => (
                    <li onClick={handleDelete} key={index}>{lis}</li>
                ))}
                
            </ul>
        </>
    )
}

export default ListApp;