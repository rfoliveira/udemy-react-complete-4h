import React, {useState} from 'react';
import './App.css';
import Card from './Card'
import { faker } from '@faker-js/faker'

function App() {
  const [name, setName] = useState('Alan Smith')
  const buttonsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div> 
  )
  const changeNameHandler = () => {
    setName("Michael Chan")
  }

  return (
    <div className="App">
      <button className="button" onClick={changeNameHandler}>Change name</button>
      <Card avatar={faker.image.avatar()} name={name} title={faker.name.jobTitle()}>
       {buttonsMarkup}
      </Card>
    </div>
  );
}

export default App;
