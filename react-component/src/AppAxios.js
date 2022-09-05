import React, {useState, useEffect} from 'react';
import './App.css';
import CardWithoutEffect from './CardWithoutEffect'

// Usando o botão definido externamente
// import styled, { ThemeProvider, css} from 'styled-components'
import { ThemeProvider} from 'styled-components'
import MyButton from './element/MyButton'
import axios from 'axios'

const theme = {
  primary: '#4CAF50', // Green
  mango: 'yellow'
}

function AppAxios() {
  const [showCard, setShowCard] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    axios.get('https://6316866633e540a6d3954da8.mockapi.io/api/v1/users')
    .then(res => {
      console.log('res object', res)
      setCards(res.data)
    })
  }, []) 

  const toggleShowCard = () => setShowCard(!showCard)

  const cardList = showCard && (
    cards.map((card, index) => <CardWithoutEffect 
      key={card.id}
      name={card.name} 
      phone={card.phone} 
      onDelete={() => deleteCardHandler(index)} 
      onChangeNameList={(event) => changeNameListHandler(event, card.id)} />)
  )

  const deleteCardHandler = card => {
    const cards_copy = [...cards] // swallow copy
    cards_copy.splice(card, 1)
    setCards(cards_copy)

    // console.log('cards', cards);
    // console.log('cards_copy', cards_copy);
  }

  const changeNameListHandler = (event, id) => {
    const cardIndex = cards.findIndex(c => c.id === id)

    if (cardIndex < 0) return

    const cards_copy = [...cards]
    cards_copy[cardIndex].name = event.target.value
    setCards(cards_copy)
 
  }
  const buttonStyle = {
    backgroundColor: null
  }

  if (cards.length < 3) buttonStyle.backgroundColor = 'orange'
  if (cards.length < 2) buttonStyle.backgroundColor = 'red'

  // Outra forma, através de classes css
  const classes = ['button']
  if (cards.length < 3) classes.push('orange')
  if (cards.length < 2) classes.push('red')

  // Com ThemeProvider
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MyButton color="primary" length={cards.length} onClick={toggleShowCard}>Toggle</MyButton>
        { cardList}
      </div>
    </ThemeProvider>
  )
}

export default AppAxios