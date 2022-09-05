// Convert functional base to class base

import React, { Component } from 'react';
import './App.css';

// Com CardBase...
// import Card from './Card'
import CardBase from './CardBase'
import { faker } from '@faker-js/faker'

import { ThemeProvider } from 'styled-components'
import MyButton from './element/MyButton'

const theme = {
    primary: '#4CAF50', // Green
    mango: 'yellow'
}

class App2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: [
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
                }
            ],
            showCard: true,
        }
    }

    toggleShowCard = () => this.setState({ showCard: !this.state.showCard })

    deleteCardHandler = card => {
        const cards_copy = [...this.state.cards]
        cards_copy.splice(card, 1)
        this.setState({ cards: cards_copy })
    }

    changeNameListHandler = (event, id) => {
        const cardIndex = this.state.cards.findIndex(c => c.id === id)

        if (cardIndex < 0) return

        const cards_copy = [...this.state.cards]
        cards_copy[cardIndex].name = event.target.value
        this.setState({ cards_copy: cards_copy })
    }

    render() {
        const classes = ['button']

        if (this.state.cards.length < 3) classes.push('orange')
        if (this.state.cards.length < 2) classes.push('red')

        const cardListMarkup = this.state.showCard && (
            this.state.cards.map((card, index) => <CardBase
                key={card.id}
                avatar={card.avatar}
                name={card.name}
                title={card.title}
                onDelete={() => this.deleteCardHandler(index)}
                onChangeNameList={(event) => this.changeNameListHandler(event, card.id)} />)
        )

        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <MyButton color="primary" length={this.state.cards.length} onClick={this.toggleShowCard}>Toggle</MyButton>
                    {cardListMarkup}
                </div>
            </ThemeProvider>
        )
    }
}

export default App2;