import { shuffle } from "lodash";

function choosePokemon(pokemon){
  shuffle(pokemon);

  const hand1 = pokemon.splice(0,4);
  const hand2 = pokemon;

  return {hand1, hand2};
}

export default choosePokemon;