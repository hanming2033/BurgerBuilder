import * as React from 'react'
import styled from 'styled-components'
import { IBurgerBuilderState, MIN_NUMBER, MAX_NUMBER } from '../../../containers/BurgerBuilder'
import { ingredientType } from '../BurgerIngredient'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

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
      <IconButton onClick={props.removeIngredient} disabled={disableRemove}>
        <Icon>remove_circle</Icon>
      </IconButton>
      <IconButton onClick={props.addIngredient} disabled={disableAdd}>
        <Icon>add_circle</Icon>
      </IconButton>
    </BuildControl>
  )
}

export default buildControl
