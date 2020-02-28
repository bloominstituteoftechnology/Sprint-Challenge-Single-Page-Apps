import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";

export default function LocationsList() {
    const [page,setPage] = useState(1);
    const [data,setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios
          .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/`)
          .then(response => {
            const characters = response.data.results.filter(character =>
              character.name.toLowerCase().includes(query.toString().toLowerCase())
            );
            setData(characters);
          });
    }, [query]);
        
        const handleQuery = q => {
            console.log("changing query to", q)
            setQuery(q);
        }
        return (
            <section className="location-list card-wrapper">        
              <SearchForm handleQuery={handleQuery}></SearchForm>
               {data.map(c => {
                    return <LocationCard key={c.id} data={c}/>
                })}   
            </section>
          );

}


