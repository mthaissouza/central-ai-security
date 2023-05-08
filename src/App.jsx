import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import api from "./services/api";
import NameImage from "./assets/imgs/name.png";
import Search from "./components/Searcher/Searcher";
import DividerTitle from "./components/DividerTitle/DividerTitle";

const App = () => {
  const [character, setCharacter] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      api
        .get(`https://rickandmortyapi.com/api/character/?name=${value}`)
        .then((res) => {
          if (res.error) {
            console.log(res.error);
          } else {
            setCharacter(res.data.results);
          }
        });
    }, 1000);
  }, [value]);

  return (
    <div className="App">
      <div className="Header">
        <img className="HeaderImg" src={NameImage} />
        <Search value={value} onChange={(e) => setValue(e.target.value)}></Search>
      </div>
      <DividerTitle title={'List a character'}></DividerTitle>
      <div className="Cards">
        {character.map((character) => {
          return (
            <div key={character.id}>
              <Card
                image={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                location={character.location.name}
                origin={character.origin.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
