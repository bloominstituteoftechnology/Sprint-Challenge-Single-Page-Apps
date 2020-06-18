import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Character from "./character"

function CharacterList() {
  const [url] = useState("https://rickandmortyapi.com/api/character/")
  const [info, setInfo] = useState({})
  const [results, setResults] = useState([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)


  useEffect(()=> {
    console.log('url: ', url)
    console.log('info: ', info)
    console.log('results: ', results)
    console.log('search: ', search)
  }, [url, info, results, search])

  useEffect(() => {
    axios.get(`${url}?page=${page}&name=${search}`)
      .then((result)=>{
        setInfo(result.data.info)
        setResults(result.data.results)
      })
      .catch((error)=> {
        setPage(1)
        console.log(error)
      })
  }, [search, page])

  const nextHandler = (event) => {
    event.preventDefault()
    if(page <= info.pages){
      setPage(page + 1)
    }else{
      setPage(1)
    }
  } 

  const prevHandler = (event) => {
    event.preventDefault()
    if(page>1){
      setPage(page -1)
    }else{
      setPage(info.pages)
    }
  }


  

  return (
    <>
      <header className="second">
        <div className="nav">
        <Link className='home' to ={'/'}>Home</Link>
        </div>
        <div className="buttons">
        <button
          onClick={(event) => nextHandler(event)}
        > + </button>
        <p>{page}/{info.pages}</p>
        <button
          onClick={(event) => prevHandler(event)}
        > - </button>
        </div>
        <div className="search">
        <p > Search </p> <input onChange={(e)=>{
          setSearch(e.target.value)
        }} 
        value={search}
        type="text"/>
        </div>
      </header>
      <main>
        <section className="characters"> 
          {results.map((result, index)=> (
            <Character key={index} result={result} />
          ))}
        </section>
      </main>
    </>
  );     
}
 
export default CharacterList