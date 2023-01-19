import './App.css';
import Escena from "./components/escena/Escena"
import txt from "./data.json"
import { StoryStyled } from "./components/escena/Escena.style";

function App() {
  const stories = txt.map((item) =>  <StoryStyled><Escena story={item}/></StoryStyled>)
  
  return (
    <div>
      {stories}
    </div>
  
  );
}

export default App;
