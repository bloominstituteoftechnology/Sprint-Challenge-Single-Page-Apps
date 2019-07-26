import React from "react";

export default function LocationsList(props) {
  return <div>hello</div>;
}

//   const [location, setLocation] = useState([]);
//   console.log(location);

//   useEffect(() => {
//     axios
//       .get(`https://rickandmortyapi.com/api/location/`)
//       .then(res => {
//         console.log("Location is working:", res.data.results);
//         setLocation(res.data.results);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   // TODO: Add AJAX/API Request here - must run in `useEffect`
//   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

//   return (
//     <section className="character-list grid-view">
//       {location.map((props, index) => (
//         <LocationCard
//           key={props.id}
//           name={props.name}
//           type={props.type}
//           dimension={props.dimension}
//         />
//       ))}
//     </section>
//   );
// }
