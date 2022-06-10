import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import { Wrapper } from "./components/Wrapper/Wrapper";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Wrapper>
        <Hero></Hero>
      </Wrapper>
    </div>
  );
}

export default App;
