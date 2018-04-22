import styled from 'styled-components'

export interface IButtonProps {
  success?: boolean
  danger?: boolean
}

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${(p: IButtonProps) => (p.danger ? '#944317' : p.success ? '#5C9210' : 'white')};
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`

export default Button
