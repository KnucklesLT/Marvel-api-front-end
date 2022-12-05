import { useState, useEffect } from "react"
import * as charactersService from '../../services/charactersService.js'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      const allCharacters = await charactersService.index()
      setCharacters(allCharacters)
    }
    fetchCharacters()
  }, [])

  
  if (!characters) return <h1>Characters Loading...</h1>
  return ( 
    <>
      <h1>Marvel Characters</h1>
      {characters.map( character => 
        <article key={character.id}>
          <h3>{character.name}</h3>
          <p>{character.description}</p>
        </article>
      )}
    </>
  );
}

export default Characters;