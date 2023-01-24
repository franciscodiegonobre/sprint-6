import "./App.css";
import Escena from "./components/escena/Escena";
import scenes from "./data.js";
import { StoryStyled } from "./components/escena/Escena.style";
import { useState } from "react";

function App() {
  const [hasBackground, setBackground] = useState(true);
  const applyBackground = () => {
    setBackground(hasBackground);
  };

  const [count, setCount] = useState(0);
  const increase = () => {
    if (count < 4) {
      setCount(count + 1);
    }
    console.log(count);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    console.log(count);
  };

  const stories = scenes.map((item) => {
    if (item.id === count) {
      return (
        <StoryStyled className={hasBackground ? "background-p" : ""}>
          <Escena story={item.scene} />
        </StoryStyled>
      );
    } else {
      return (
        <StoryStyled>
          <Escena story={item.scene} />
        </StoryStyled>
      );
    }
  });

  return (
    <div>
      <button onClick={decrease}>Anterior</button>
      <button
        onClick={() => {
          increase();
          applyBackground();
        }}
      >
        Següent
      </button>
      {stories}
    </div>
  );
}

export default App;
