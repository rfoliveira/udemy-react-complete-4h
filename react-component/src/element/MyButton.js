import styled, { css} from 'styled-components'

const MyButton = styled.button`
  border: none;
  color: white;
  ${props => props.color && css`
  background-color: ${props => props.length < 2 ? 'red' : props.length < 3 ? 'orange' : props.theme[props.color]};
  `}
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`
export default MyButton