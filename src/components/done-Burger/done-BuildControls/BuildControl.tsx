import * as React from 'react'
import styled from 'styled-components'
import { IBurgerBuilderState, MIN_NUMBER, MAX_NUMBER } from '../../../containers/BurgerBuilder'
import { ingredientType } from '../BurgerIngredient'
import { Button } from 'antd'

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
  width: 80px;
`

const buildControl: React.SFC<IbuildControlProps> = props => {
  const disableAdd = props.ingredients && props.ingredients[props.type] >= MAX_NUMBER[props.type] ? true : false
  const disableRemove = props.ingredients && props.ingredients[props.type] <= MIN_NUMBER[props.type] ? true : false

  return (
    <BuildControl>
      <Label>{props.label}</Label>
      <Button shape="circle" onClick={props.removeIngredient} disabled={disableRemove}>
        -
      </Button>
      <Button shape="circle" onClick={props.addIngredient} disabled={disableAdd}>
        +
      </Button>
    </BuildControl>
  )
}

export default buildControl
