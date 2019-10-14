import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import CharacterCard from "./CharacterCard"




// export default function SearchForm({ values, errors, touched, status }) {
//   const [char, setChar] = useState();
//   useEffect(() => {
//     if (status) {
//       setChar([...char, status]);
//     }
//   }, [status]);

//   return (
//     <section className="search-form">
//       <Formik>
//         <Form>
//           <Field type="text" name="search" placeholder="Push CTRL F" />
//         </Form>
//       </Formik>
//     </section>
//   );
// }

// onChange(values, {setChar}) {(
//   char.filter( event => {
//     <CharacterCard key={event.id} event={event} />
//   })
// )};
 

