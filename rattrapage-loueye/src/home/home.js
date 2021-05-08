/* Vue de la page d'accueil */
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export function home() {
    const [cats, setCats] = useState([]);
    const getData = (int) => {
        for(i=0; i<int;i++){
            axios.get('https://cataas.com/cat?json=true').then(({data: {results}  }) => {
            setCats((oldCats)=>[...oldCats,...results])
        })
        }
    }
    useEffect(
        ()=>{getData(2)},[],
    )

    return (
        <div>
            {cats.map(cat => <img src={'https://cataas.com/' + cat.url}/>)}
        </div>
    );
}
