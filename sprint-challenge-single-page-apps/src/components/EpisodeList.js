import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from 'semantic-ui-react';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
      .then(res => {
        // console.log(res.data.results);
        setEpisodes(res.data.results);
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
        firstItem={null}
        lastItem={null}
        prevItem={null}
        nextItem={null}
      />
      <div className='grid-view'>
        {episodes.map(episode => {
          return <EpisodeCard key={episode.id} episode={episode} />;
        })}
      </div>
    </section>
  )
}
