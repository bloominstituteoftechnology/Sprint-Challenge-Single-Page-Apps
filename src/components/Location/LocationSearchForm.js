import React from "react";

import LocationCard from "./LocationCard";

function LocationSearchForm(props) {
    return (
    <section className="search-form">
        <form className="search">
            <input
                type="text"
                onChange={props.handleChangeLoc}
                value={props.search}
                name="name"
                placeholder="search..."
                className="prompt search-name"
                autoComplete="off" 
            />
        </form>

        <div>
           
                
                    <LocationCard 
                        name={""}
                        key={""}
                    />
                    
                   
        </div>
    </section>
 );
        
    
}

export default LocationSearchForm