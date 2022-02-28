"use strict";

import Pokecard from "./Pokecard";

function Pokedex({ pokemon }) {
  return (
    <div>
      {pokemon.map(p => <Pokecard name={p.name} id={p.id} type={p.type} />)}
    </div>
  );
}

export default Pokedex;