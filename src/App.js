import "./App.css";
import Palette from "./Palette";
import seedColors from "./seedColors.js";

function App() {
  return (
    <div>
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
