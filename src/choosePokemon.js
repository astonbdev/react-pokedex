import { shuffle } from "lodash";

function choosePokemon(pokemon) {
  const shuffledPokemon = shuffle(pokemon);

  const hand1 = shuffledPokemon.splice(0, 4);
  const hand2 = shuffledPokemon;
  console.log(hand2);

  return { hand1, hand2 };
}

export default choosePokemon;