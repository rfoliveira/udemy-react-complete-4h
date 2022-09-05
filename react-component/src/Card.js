import React, { useEffect, useState} from 'react'
import './App.css'

const Card = props => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const recordMouseMovement = e => {
    setX(e.clientX)
    setY(e.clientY)
  }

  // O parâmetro de array vazio, significa que será
  //  executado apenas uma vez após a montagem dos elementos
  useEffect(() => {
    window.addEventListener('mousemove', recordMouseMovement)

    // Para remover um warning que não aconteceu aqui, quando não está mostrando os cards
    return() => {
      window.removeEventListener('mousemove', recordMouseMovement)
    }
  }, [])  

  return (
    <div className="card">
        <p>x position: {x}</p>
        <p>y position: {y}</p>
        <img src={props.avatar} alt="Avatar" style={{width: '100%'}} />
        <div className="container">
            <h4><b>{props.name}</b></h4> 
            <p>{props.title}</p> 
            <input type="text" value={props.name} onChange={props.onChangeNameList} />
            <p><button className="button button-red" onClick={props.onDelete}>Delete</button></p>
            <div>{props.children}</div>
        </div>
    </div>
  )
}

export default Card