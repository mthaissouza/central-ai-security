import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import api from "./services/api";

const App = () => {
  const [personagens, setPersonagens] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    api
      .get(`https://rickandmortyapi.com/api/character/?name=${value}`)
      .then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          console.log("RES: ", res.data.results);
          setPersonagens(res.data.results);
        }
      });
  }, [value]);

  return (
    <div className="App">
      <h1>Meu projeto React</h1>
      <div className="Cards">
        {personagens.map((personagem) => {
          return (
            <div key={personagem.id}>
              <Card
                image={personagem.image}
                name={personagem.name}
                status={personagem.status}
                species={personagem.species}
                gender={personagem.gender}
                location={personagem.location.name}
                origin={personagem.origin.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
