import React from 'react'
import './App.css'

const CardWithoutEffect = props => {
  return (
    <div className="card">
        <div className="container">
            <h4><b>{props.name}</b></h4> 
            <p>{props.phone}</p> 
            <input type="text" value={props.name} onChange={props.onChangeNameList} />
            <p><button className="button button-red" onClick={props.onDelete}>Delete</button></p>
            <div>{props.children}</div>
        </div>
    </div>
  )
}

export default CardWithoutEffect