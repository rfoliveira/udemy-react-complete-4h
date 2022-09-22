import React, {useState, useEffect} from 'react';
import './App.css';
import CardWithoutEffect from './CardWithoutEffect'

// Usando o botão definido externamente
// import styled, { ThemeProvider, css} from 'styled-components'
import { ThemeProvider} from 'styled-components'
import axios from 'axios'

const theme = {
  primary: '#4CAF50', // Green
  mango: 'yellow'
}

function AppAxiosOneCard() {
  const [card, setCard] = useState([])
  const [id, setId] = useState(1)

  useEffect(() => {
    axios.get(`https://6316866633e540a6d3954da8.mockapi.io/api/v1/users/${id}`)
    .then(res => {
      console.log('card object', res)
      setCard(res.data)
    })
  }, [id]) 

  const changeNameHandler = (event, id) => {
    
    if (id <= 0) return

    const card_copy = {...card}
    card_copy.name = event.target.value
    setCard(card_copy)
  }

  // Com ThemeProvider
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <CardWithoutEffect 
        key={card.id}
        name={card.name} 
        phone={card.phone} 
        onChangeNameList={(event) => changeNameHandler(event, card.id)} />
        
      </div>
    </ThemeProvider>
  )
}

export default AppAxiosOneCard