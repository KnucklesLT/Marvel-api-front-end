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

  characters.map(character => console.log(character))

  return ( 
    <>
      <h1>Marvel Characters</h1>
    </>
  );
}

export default Characters;