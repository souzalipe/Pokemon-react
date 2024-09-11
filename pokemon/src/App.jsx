import { useState } from 'react'
import { useFetch } from './utils/useFecht';
import './App.css'

function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault(); // Isso impede o comportamento padrão de recarregar a página no clique do botão
    const pokemon = await useFetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    setPokemon(pokemon);
  }

  return (
    <main>
      <form>
        <input 
          type="text" 
          onChange={(e) => { setPokemonName(e.target.value) }} 
        /> 
        <button onClick={handleClick}>Procurar</button>
      </form>

      {pokemon && (
        <section>
          <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
          <p>{pokemon?.name}</p>
        </section>
      )}
    </main>
  );
}

export default App;
