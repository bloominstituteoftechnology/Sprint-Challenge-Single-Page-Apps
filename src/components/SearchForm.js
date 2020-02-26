import React, { useState } from "react";

export default function SearchForm(props) {

  const [localSearchTerm, setLocalSearchTerm] = useState("")
  const handleChange = (event) => {
    setLocalSearchTerm(event.target.value)
    console.log("local search term", localSearchTerm);
  }

  useEffect(() => {
    const results = props.characters.filter(character => {
      return character.name.toLowerCase().includes(localSearchTerm)
    })
    console.log('results', results)
    return props.setCharactersToDisplay(results)
  }, [localSearchTerm])

  return (
    <section className="search-form">
      <form>
        <input id="search" type='text' name="textField" placeholder="search" onChange={handleChange} />
      </form>
    </section>
  );
}
