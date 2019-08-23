import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard.js';







export default function LocationsList() {


    const [locationData, setLocation] = useState([]);

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
    
    <h2> {locationData.map(location => <LocationCard
    
                name={location.name}
                type={location.type}
                dimension={location.dimension}
                residents={location.residents}
                
                
                />
            )} </h2>
    
    
        </div>
    
    
    
    );













}








