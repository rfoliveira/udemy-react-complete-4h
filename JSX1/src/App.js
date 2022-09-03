import React from 'react';
import './Custom.css'

function App() {
  // Normal, usando classe css
  // return (
  //   <div className='outerdiv'>
  //     <div className='innerdiv'>This is a green box</div>
  //   </div>
  // )

  // Usando inline css (muito ruim..)
  // return (
  //   <div style={{
  //     padding: '70px 0',
  //     backgroundColor: 'red'
  //     }}>
  //       <div style={{
  //         textAlign: 'center',
  //         margin: 'auto',
  //         width: '60%',
  //         border: '3px solid black',
  //         backgroundColor: '#73ad21',
  //         padding: '70px 0'}}>This is a green box</div>
  //     </div>
  // )

  /*
  Obs.
  ---
  const greenStyle = {color: 'green'};
  <Box style={greenStyle} />

  É o mesmo que:
  <Box style={{color: 'green'}} />
  */

  /*
  Outra forma...
  const styles =  {
    innerDiv: {
      textAlign: 'center',
      margin: 'auto',
      width: '60%',
      border: '3px solid black',
      backgroundColor: '#73ad21',
      padding: '70px 0'
    },
    outerDiv: {
      padding: '70px 0',
      backgroundColor: 'red'
    }
  }

  <div style={styles.outerDiv}>
    <div style={styles.innerDiv}>This is a green box</div>
  </div>

  Fast track to convert CSS to JS object
  https://transform.tools/css-to-js
  */

  const styles =  {
    innerDiv: {
      textAlign: 'center',
      margin: 'auto',
      width: '60%',
      border: '3px solid black',
      backgroundColor: '#73ad21',
      padding: '70px 0'
    },
    outerDiv: {
      padding: '70px 0',
      backgroundColor: 'red'
    }
  }
  const sometext = 'some text'
  const somediv = <div style={{
    backGroundColor: 'white'
  }}>some div</div>

  return (
    <div style={styles.outerDiv}>
        <div style={styles.innerDiv}>{somediv}</div>
      </div>
  )
}

export default App;
