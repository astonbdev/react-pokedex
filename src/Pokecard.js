/** Pokecard Component
 * 
 * Props:
 *  name: string
 *  id: number
 *  type: string
 *  base_experience: number
 * 
 * Returns component of a single pokemon
 */

function Pokecard({ name, id, type, base_experience }) {
  const imgSrc = (
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  );

  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <img alt={name} src={imgSrc}></img>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;