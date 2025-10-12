
import './App.css';
import Component1 from './Component1';
import { useState } from 'react';

function App() {

  const [fname, setName] = useState("");


  return (
    <div className="App">
     <Component1 fname={fname} setName={setName}></Component1>
    
           <h1>name in component 2 : {fname}</h1>

    </div>
  );
}


export default App;
