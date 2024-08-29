// import styled from "styled-components";
import { useState } from "react";
import GamePlay from "./Components/GamePlay";
import StartGame from "./Components/StartGame";

function App() {
    const[isGamePlay, setisGamePlay] = useState(false);

const toggleGamePlay = () => {
    setisGamePlay((prev) => !prev);
}

return <div>
{isGamePlay ? <GamePlay/> : <StartGame toggle = {toggleGamePlay}/>}
</div>
}
export default App
