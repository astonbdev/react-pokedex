import choosePokemon from "./choosePokemon";
import Pokedex from "./Pokedex";
import { defaultPokemon } from "./pokemon"

function Pokegame({ pokemon = defaultPokemon }) {

  const { hand1, hand2 } = choosePokemon(pokemon);
  const hand1Exp = hand1.reduce(
    (expSum, pokemon) => expSum += pokemon.base_experience, 0);
  const hand2Exp = hand2.reduce(
    (expSum, pokemon) => expSum += pokemon.base_experience, 0);



  return (
    <div className="Pokegame">
      <h2>Hand 1</h2>
      <Pokedex
        pokemon={hand1}
        totalExp={hand1Exp}
        isWinner= {hand1Exp > hand2Exp} />
      <h2>Hand 2</h2>
      <Pokedex
        pokemon={hand2}
        totalExp={hand2Exp}
        isWinner= {hand1Exp < hand2Exp}/>
    </div>
  );
}

export default Pokegame;