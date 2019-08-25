import React, { useEffect, useState } from "react";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
         .get(xxx`https://rickandmortyapi.com/api/character/?page=${page}`)
         .then(res => {
           // console.log(res.data.info.pages);
           setCharacters(res.data.results);
           setPageCount(res.data.info.pages);
         })
         .catch(err => console.err("Something's not working. Take alook at this:",err));
     }, [page]);
     const handlePaginationChange = (e, { activePage }) => {
       setPage(activePage);
 };


  return (
    <section className='ui bottom attached segment active'>
      <Pagination
        activePage={page}
        boundaryRange={0}
        siblingRange={1}
        onPageChange={handlePaginationChange}
        totalPages={pageCount}
        ellipsisItem={null}
      />

    <section className="character-list grid-view">
      // <h2>TODO: `array.map()` over your state here!</h2>
      <div className='character-list grid-view'>
       {characters.map(character => {
         return <CharacterCard key={character.id} character={character}
        />;
       })}
     </div>
    </section>
  );
}
