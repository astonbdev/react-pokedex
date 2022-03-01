import './App.css';
import Pokegame from './Pokegame';
import { defaultPokemon } from './pokemon';

/** App Component
 *
 * Root level component
 */

function App() {
  return (
    <div className="App">
      <Pokegame pokemon={defaultPokemon} />
    </div>
  );
}

export default App;
