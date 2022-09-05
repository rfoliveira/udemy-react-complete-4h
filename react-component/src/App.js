import React, {useState} from 'react';
import './App.css';
import Card from './Card'
import { faker } from '@faker-js/faker'

// Usando o botão definido externamente
// import styled, { ThemeProvider, css} from 'styled-components'
import { ThemeProvider} from 'styled-components'
import MyButton from './element/MyButton'

const theme = {
  primary: '#4CAF50', // Green
  mango: 'yellow'
}

// Sem ThemeProvider...
// const MyButton = styled.button`
//   background-color: ${props => props.length < 2 ? 'red' : props.length < 3 ? 'orange' : '#4CAF50'};
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin: 4px 2px;
//   cursor: pointer;
// `

// Com ThemeProvider
// const MyButton = styled.button`
//   border: none;
//   color: white;
//   ${props => props.color && css`
//     background-color: ${props => props.length < 2 ? 'red' : props.length < 3 ? 'orange' : props.theme[props.color]};
//   `}
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin: 4px 2px;
//   cursor: pointer;
// `

function App() {
  const [name, setName] = useState('Alan Smith')
  const [showCard, setShowCard] = useState(true)
  
  const [cards, setCards] = useState([
    {
      id: 'some_id_1',
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avatar: faker.image.avatar(),
      title: faker.name.jobTitle()
    },
    {
      id: 'some_id_2',
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avatar: faker.image.avatar(),
      title: faker.name.jobTitle()
    },
    {
      id: 'some_id_3',
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avatar: faker.image.avatar(),
      title: faker.name.jobTitle()
    },
  ])

  const buttonsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div> 
  )

  const changeNameHandler = name => setName(name)

  // Two-way binding
  const changeInputHandler = event => setName(event.target.value)

  // Condictional rendering
  const toggleShowCard = () => setShowCard(!showCard)

  const cardMarkup = showCard && <Card 
    avatar={faker.image.avatar()} 
    name={name} 
    title={faker.name.jobTitle()} 
    onChangeName={() => changeNameHandler("Beltrano da Silva")}
    onChangeInput={changeInputHandler}>
    {buttonsMarkup}
  </Card>

  // Para lista
  // Dessa forma, dá o erro -> react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.
  // Colocando uma chave única para cada item com "key={card.id}", tira esse problema 
  const cardList = showCard && (
    cards.map((card, index) => <Card 
      key={card.id}
      avatar={card.avatar} 
      name={card.name} 
      title={card.title} 
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

  // Da forma abaixo dá erro de "Too many re-renders. React"
  // return (
  //   <div className="App">
  //     <button className="button" onClick={changeNameHandler('Fulano da Silva')}>Change name</button>
  //     <Card 
  //       avatar={faker.image.avatar()} 
  //       name={name} 
  //       title={faker.name.jobTitle()} 
  //       onChangeName={changeNameHandler("Beltrano da Silva")}>
  //      {buttonsMarkup}
  //     </Card>
  //   </div>
  // );

  // Para corrigir esse erro, precisa passar como arrow function
  // return (
  //   <div className="App">
  //     {/* <button className="button" onClick={() => changeNameHandler('Fulano da Silva')}>Change name</button> */}
  //     {/* <button className={classes.join(' ')} onClick={toggleShowCard} style={buttonStyle}>Toggle show/hide</button> */}
  //     <MyButton length={cards.length}>Toggle</MyButton>

  //     {/* Isso é igual a variable_object ? do_if_true : null */}
  //     {/* {cardMarkup} */}
  //     { cardList}
      
  //   </div>
  // )

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

export default App;