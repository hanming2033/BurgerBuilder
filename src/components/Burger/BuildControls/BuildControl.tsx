import * as React from 'react'
import styled from '../../../my-styled-components'
import { IBurgerBuilderState, MIN_NUMBER, MAX_NUMBER } from '../../../containers/BurgerBuilder'
import { ingredientType } from '../BurgerIngredient'

interface IbuildControlProps extends Partial<IBurgerBuilderState> {
  label: string
  addIngredient: () => void
  removeIngredient: () => void
  type: ingredientType
}

const BuildControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`

const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`

interface Ibutton {
  More?: boolean
  Less?: boolean
}

const Button = styled.button`
  color: white;
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;

  background-color: ${(p: Ibutton) => (p.Less ? '#D39952' : '#8F5E1E')};

  &:hover,
  &active {
    background-color: ${(p: Ibutton) => (p.Less ? '#DAA972' : '#99703F')};
  }

  &:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }

  &:hover:disabled {
    background-color: #ac9980;
    color: #ccc;
    cursor: not-allowed;
  }
`

const buildControl: React.SFC<IbuildControlProps> = props => {
  const disableAdd = props.ingredients && props.ingredients[props.type] >= MAX_NUMBER[props.type] ? true : false
  const disableRemove = props.ingredients && props.ingredients[props.type] <= MIN_NUMBER[props.type] ? true : false

  return (
    <BuildControl>
      <Label>{props.label}</Label>
      <Button onClick={props.removeIngredient} Less disabled={disableRemove}>
        -
      </Button>
      <Button onClick={props.addIngredient} More disabled={disableAdd}>
        +
      </Button>
    </BuildControl>
  )
}

export default buildControl
