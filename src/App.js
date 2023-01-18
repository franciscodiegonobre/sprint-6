import './App.css';
import Escena from "./components/escena/Escena"
import txt from "./data.json"

function App() {
  const stories = txt.map(item => <Escena story={item}/>)
  console.log(stories)
  
  return (
    <div>
      {stories}  
    </div>

  );
}

export default App;
