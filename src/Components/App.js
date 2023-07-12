import logo from '../logo.svg';
import './App.css';
import React from "react";
import {useEffect, useState} from "react";

function App() {
    let images;
    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        async function getPokemons(){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=156&offset=0')
            const data = await response.json()

            setPokemons(data.results)

        }
        getPokemons()
    }, [])

  return (
      <div>

              <div className="container">
                  {pokemons.map((pokemon, index) =>{
                      images = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
                    return(
                        <div className="target" key={pokemon.name}>
                                <p id="texto1">{pokemon.name}</p>
                                <p id="texto">Numero de Pokedex: {index+1}</p>
                                <img src={images} alt={pokemon.name}></img>
                        </div>
                    )
                })}
                </div>
      </div>
  );
}

export default App;
