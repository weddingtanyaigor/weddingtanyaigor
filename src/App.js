import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import "./App.css";

function App() {
  return (
    <>
      <FirstScreen />
      <SecondScreen />
      <FirstScreen last />
    </>
  );
}

export default App;
