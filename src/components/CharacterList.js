import React, { useEffect, useState } from "react";
import Axios from "axios";

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    Axios
      .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(res => {
        console.log(res);
        const characters = res.data.results;
        setData(characters);
      })
      .catch(err => {
        console.log('No character found with that name!');
      })
  }, [search]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  return (
    <section className="character-list">
      <h2>Who're we looking for?</h2>
      <SearchForm
        placeholder='Gimme A Name...'
        value={search}
        handleChange={handleChange}
      />
      <br/>
      <div className="grid-view">
        {data.map(character => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
    </section>
  );
}
