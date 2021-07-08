import Calculator from "./components/Calculator/calculator";
import UserInfo from "./components/UserInfo/userinfo";
import Counter from "./components/Counter/counter";
import TagInput from "./components/TagInput/taginput";
import SearchDropdown from "./components/Dropdown/dropdown";
import countries from "./components/Dropdown/countries";
import Museum from "./components/Museum/museum";
import Slider from "./components/Slider/slider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Calculator</h1>
      <Calculator />
      <h1 className="title"> Search Bar </h1>

      <SearchDropdown items={countries} />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="title">Color Picker</h1>
      <Slider />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="title">User Info</h1>
      <UserInfo />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="title">Tags Input</h1>
      <TagInput />

      <h1 className="title">Museum</h1>
      <Museum />
      <br />
      <br />
      <br />
      <br />
      <h1 className="title">Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
