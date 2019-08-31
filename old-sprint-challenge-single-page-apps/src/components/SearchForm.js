import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function SearchForm() {
  // STRETCH TODO: Add stateful logic for query/form data
  const [name, setName] = useState();
  // const [search, setSearch] = useState();
  const [search, setSearch] = useLocalStorage('search', '');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(res => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch(err => console.log(err));
  }, [search])

  const handleInputChange = event => {
    setName(event.target.value);
  }

  const onSearch = event => {
    event.preventDefault();
    setSearch(name);
  }

  return (
    <section className='search-form ui bottom attached segment active'>
      <form onSubmit={onSearch}>
        <div className='ui action input'>
          <input
            onChange={handleInputChange}
            placeholder='name'
            value={name}
            name='name'
          />
          <button type='submit' className='ui icon button'>
            <i className='search icon' />
          </button>
        </div>
      </form>
      <div className='grid-view'>
        {data.map(character => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
    </section>
  );
}

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setValue];
}
