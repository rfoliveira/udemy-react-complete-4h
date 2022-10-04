// Mesma forma de importar e usar multiplos contexts,
// porém menos legígel para manutenção, em relação a
// forma usada no Componente C.
import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { NameContext, ColorContext } from '../App'

const ComponentB = () => {
  const name = useContext(NameContext)
  const color = useContext(ColorContext)

  return (
    <div>
        <div>ComponentB</div>
        <div>name: {name} color: {color}</div>
        <ComponentC />
    </div>
  )
}

export default ComponentB