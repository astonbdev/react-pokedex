import choosePokemon from "./choosePokemon";
import Pokedex from "./Pokedex";
import { defaultPokemon } from "./pokemon"

function Pokegame({pokemon = defaultPokemon}){

  const {hand1, hand2} = choosePokemon(pokemon);

  return(
    <div classname="Pokegame">
      <Pokedex pokemon={hand1}/>
      <Pokedex pokemon={hand2}/>
    </div>
  );
}

export default Pokegame;