import React from 'react'
import { NameContext, ColorContext } from '../App'

// Consumo de 1 contexto
// const ComponentC = () => {
//   return (
//     <div>
//         <div>ComponentC</div>
//         <NameContext.Consumer>
//             {name => { return <div>{name}</div> }}
//         </NameContext.Consumer>
//     </div>
//   )
// }

// Consumo de mais de um contexto, sendo um dentro do outro
const ComponentC = () => {
    return (
        <div>
            <div>ComponentC</div>
            <NameContext.Consumer>
                { name => { 
                    return (
                        <ColorContext.Consumer>
                            { color => (
                                <div>name: {name}, color: {color}</div>
                            )}
                        </ColorContext.Consumer>
                    )
                }}
            </NameContext.Consumer>
        </div>
    )
}

export default ComponentC