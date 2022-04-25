import { useState, useEffect } from 'react';
import axios from 'axios';

function CallsApp() { 
    const [data, setData] = useState([]);
    const [dataAx, setDataAx] = useState([]);

    const getData = () => { 
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => response.json())
            .then(data => setData(data))
        .catch(error => console.log(error))
    }

    const axiosFetchData = async () => { 
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/1/comments"
        );
        setDataAx(data);
    }

    useEffect(() => { 
        getData();
        axiosFetchData();
    }, []);

    return (
        <>
        <h2>Fetch with fetch</h2>
            {
            data.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.body}</p>
                    <p>{item.email}</p>
                </div>
            ))
            }
        <h2>Fetch with axios</h2>  
            {dataAx.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.body}</p>
                    <p>{item.email}</p>
                </div>
            ))}    
        </>
    )
}

export default CallsApp;