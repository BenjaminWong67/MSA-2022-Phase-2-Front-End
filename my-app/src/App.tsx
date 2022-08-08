import React from 'react';
import axios from "axios";
import { useState } from 'react';
import './App.css';

function App() {

  const [monsterName, setMonsterName] = useState("");

  const DND_MONSTER_BASE_URL = "https://api.open5e.com"
  return (
    <div>
      <h1>
        DnD Monster Guide
      </h1>

      <div>
        <label> Monster Name </label>
        <br/>
        <input 
        type="text" 
        id="monster-name" 
        name="monster-name" 
        onChange={e => setMonsterName(e.target.value)}/>
        <br/>
        <button onClick={search}>
          Search
        </button>
      </div>

      <p>
        You have entered {monsterName}
      </p>
    </div>
  );

  function search(){
    //Have to convert name to lowercase as monster indexes in the API lowercase 
    axios.get(DND_MONSTER_BASE_URL + "/monsters/" + monsterName.toLowerCase()).then((res) => {
      console.log(res.data);
    });
}
}

export default App;
