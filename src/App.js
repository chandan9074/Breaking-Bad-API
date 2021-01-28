import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Header from "./components/ui/header"
import Search from "./components/ui/search"
import CharacterFlex from "./components/character/characterflex"

function App() {
  const [items, setItems] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(()=>{
    const fatch = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fatch()
  }, [query])
  return (
    <div className="App">
     <Header/>
     <Search getQuery={(q) => setQuery(q)}/><br></br>
     <CharacterFlex isloading={isloading} items={items}/>
    </div>
  );
}

export default App;
