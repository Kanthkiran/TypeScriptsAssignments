import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Components/Greet';
import { Personlist } from './Components/PersonList';
import { Status } from './Components/Status';
import { Heading } from './Components/Heading';

function App() {
  const nameList = [
    {
      first:"Kiran",
      last:'Kanth'
    },
    {
      first:"Ravi",
      last:'Kanth'
    },
    {
      first:"Raheem",
      last:'Khan'
    }

  ]
  const personName ={
    first:'Kiran',
    last:'Kanth'
  }
  return (
    <div className="App">
     <Greet name="Kiran" messageCount={12} isLoggedIn={true} details={personName}/>
     <Personlist names={nameList}/>
     <Status status='error'/>
     <Heading>PlaceHolder text</Heading>
    </div>
  );
}

export default App;
