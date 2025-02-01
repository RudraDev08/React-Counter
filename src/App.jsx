import { useState } from "react";
import './app.css'
import styled from "styled-components";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full screen height */
  text-align: center;
  background: linear-gradient(to right, #c6f8ff, #595cff);
  color: white;
`;

const CounterBox = styled.div`
  font-size: 3rem;
  font-weight: bold;
  padding: 20px;
  background: linear-gradient(to right,  #FFFFFF , #696eff );
  color: white;
  border-radius: 10px;
  display: inline-block;
  min-width: 150px;
  transition: transform 0.2s ease-in-out;
`;

const Button = styled.button`
  background: ${(props) => props.color || "#61dafb"};
  border: none;
  padding: 10px 20px;
  margin: 10px 5px;
  font-size: 1.2rem;
  color: black;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.2s;
  `

  const ResetButton = styled(Button)`
    display:block;
  `


function App() {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <div id="head-Box">
        <h1 id="HeaderTag" color="white">REACT COUNTER</h1>
      </div>
      
      <CounterBox>{count}</CounterBox>
      <div>
        <Button color="#ffcad4" onClick={()=> setCount(count + 1)}>Increment</Button>
        <Button color="#cdb4db" onClick={()=> setCount(count - 1)}>Decrement</Button>
      </div>
      <div><ResetButton color="#fdf0d5"  onClick={()=> setCount(0)}>Reset</ResetButton></div>
    </Container>
  );
}
export default App;
