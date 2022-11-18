import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { User } from './Components/state/User';

function App() {
  return (
    <div className="App">
     <Button handleClick={(event,id)=>{
      console.log("Button clicked",event,id)
     }}/>
     <Input value='' handleChange={(event)=>console.log(event)}/>
     <User/>
    </div>
  );
}

export default App;
