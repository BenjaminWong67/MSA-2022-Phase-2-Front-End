import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {

  const [monsterName, setMonsterName] = useState("");
  const [monsterInfo, setMonsterInfo] = useState<undefined | any>(undefined);

  const DND5E_BASE_URL = "https://www.dnd5eapi.co/api/"

  return (
    <div class="content-center align-content: center">
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
        onChange={(e) => setMonsterName(e.target.value)}/>
        <br/>
        <button onClick={search}>
          Search
        </button>
      </div>

      <p>
        You have entered {monsterName}
      </p>

      {monsterInfo === undefined ? (
        <p> Monster not found.</p>
      ) : (
        <div id="equipment-result">
          <p>Name: {monsterInfo.name}</p>
          <p>Challenge Rating: { monsterInfo.challenge_rating }</p>
          <p>HP: { monsterInfo.hit_points }</p>
          <p>AC: { monsterInfo.armor_class }</p>
          <p>Speed: </p>
          <p>INT: { monsterInfo.intelligence }</p>
          <p>CON: { monsterInfo.constitution }</p>
          <p>CHA: { monsterInfo.charisma } </p>
          <p>DEX: { monsterInfo.dexterity }</p>
          <p>STR: { monsterInfo.strength } </p>
          <p>WIS: { monsterInfo.wisdom }</p>
        </div>
      )}
    </div>
  );

  function search(){
    //Have to convert name to lowercase as monster indexes in the API lowercase 
    axios.get(DND5E_BASE_URL  + "/monsters/" + monsterName.toLowerCase()).then((res) => {
      setMonsterInfo(res.data);
    });
}
}

export default App;
