import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => {
        // console.log(res.data.info.pages);
        setCharacters(res.data.results);
        setPageCount(res.data.info.pages);
      })
      .catch(err => console.log(err));
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
      <div className='character-list grid-view'>
        {characters.map(character => {
          return <CharacterCard key={character.id} character={character}
         />;
        })}
      </div>
    </section>
  );
}
