import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard.js';


export default function LocationsList() {

    const [location, setLocation] = useState([]);

    useEffect(() => {

        axios.get('https://rickandmortyapi.com/api/location/')
        .then(res => {
            console.log('working', res.data.results);

            setLocation(res.data.results);
        })

        .catch(err => console.log(err));
    },[]);


    return (

        <div>

{location.map(locations => (
                <LocationCard

                name={location.name}
                type={location.type}
                dimension={location.dimension}
                residents={location.residents}
                
                
                />
            ))}


        </div>



    );

}
