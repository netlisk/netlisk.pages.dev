import React from 'react';
import './App.css';
import Map from "./Components/Map";
import styled from "styled-components";

const StyledMap = styled(Map)`
    height: 100vh;
`;

function App() {
  return (
    <div className="App">
        <StyledMap />
    </div>
  );
}

export default App;
