// import axios from 'axios';
// import react, { useEffect, useState} from 'react-router-dom';



// function LocationList() {
//    const [LocationPage, setLocationPage] = useState([])
//    useEffect(() => {
//    axios
//    .get('https://rickandmortyapi.com/api/location/')
//    .then(response => setLocationPage(response.data.results))
//    .catch(error => console.error(error))
// }, [])
//  return (
//    <section>
//      <div>
//        <h1> location to the ultimate fan site!</h1>
//       {LocationPage.map(banana => (
// <div>{banana.name}</div>
// ))}
//      </div>
//    </section>
//  );
// }
// export default LocationList;