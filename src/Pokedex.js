

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

function Pokedex({ pokemon = defaultPokemon }) {
  return (
    <div className="Pokedex">
      {pokemon.map(p => {
        return <Pokecard
          name={p.name}
          id={p.id}
          type={p.type}
          base_experience={p.base_experience} />
      })}
    </div>
  );
}

export default Pokedex;