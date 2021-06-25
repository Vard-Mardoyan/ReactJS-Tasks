import logo from './logo.svg';
import './App.css';
import Calculator from "./components/Calculator/calculator";
import UserInfo from "./components/UserInfo/userinfo";
import Counter from "./components/Counter/counter";
import Cards from "./components/Unmounting/unmounting";
import SearchDropdown from "./components/Dropdown/dropdown";
import countries from "./components/Dropdown/countries";
import Museum from "./components/Museum/museum";
import TicTacToe from "./components/Game/tic-tac-toe";
import Slider from "./components/Slider/Slider";
function App() {
  return (
    <div className="App">
    <h1>Calculator</h1>
      <Calculator />
<h1>Counter</h1>
<Counter />
<h1>Dropdown</h1>
<Dropdown />
<h1>Museum</h1>
<Museum />
<h1>Slider</h1>
<Slider />
    </div>
  );
}

export default App;

