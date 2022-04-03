import './App.css';
import React, {useState, useEffect } from 'react';

export const GetUrlSquares = () => {
    const [urls, setUrl] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos").then(result => result.json()).then((data) => {setUrl(data)});
        
    
    },[]);

    return (
        <div>
            {urls.map(el => (
              <img key={el.id} src={el.url} alt ="" />
            ))}
        </div>

    );
}
