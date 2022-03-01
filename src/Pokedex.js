

import Pokecard from "./Pokecard";
import { defaultPokemon } from "./pokemon";

/** Pokedex Component
 *
 * Props:
 *  pokemon: [{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 }, ...]
 *
 * Returns sequence of Pokecard components
 *
 * App -> Pokedex -> Pokecard
 */

function Pokedex({ pokemon = defaultPokemon, totalExp, isWinner }) {
  const winMessage = isWinner ? "You win!" : "You lose!";
  return (
    <div className="Pokedex" >
      {pokemon.map(p => {
        return <Pokecard
          name={p.name}
          id={p.id}
          type={p.type}
          base_experience={p.base_experience} />
      })}
      <h5 className="Exp">Total EXP: {totalExp} </h5>
      <h5>{winMessage}</h5>
    </ div>
  );
}

export default Pokedex;