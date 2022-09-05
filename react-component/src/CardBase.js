// Convert Card component to class base component

import React, { Component } from 'react'
import './App.css'

class CardBase extends Component {
  
  render() {
    return (
      <div className="card">
          <img src={this.props.avatar} alt="Avatar" style={{width: '100%'}} />
          <div className="container">
              <h4><b>{this.props.name}</b></h4> 
              <p>{this.props.title}</p> 
              <input type="text" value={this.props.name} onChange={this.props.onChangeNameList} />
              <p><button className="button button-red" onClick={this.props.onDelete}>Delete</button></p>
              <div>{this.props.children}</div>
          </div>
      </div>
    )
  }  
}

export default CardBase