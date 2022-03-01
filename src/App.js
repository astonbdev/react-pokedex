import './App.css';
import Pokedex from './Pokedex';
import { defaultPokemon } from './pokemon';

/** App Component 
 * 
 * Root level component
 */

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={defaultPokemon} />
    </div>
  );
}

export default App;
