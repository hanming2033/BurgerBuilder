import * as React from 'react'
import styled from '../../../my-styled-components'
import BuildControl from './BuildControl'
import { ingredientType } from '../BurgerIngredient'
import { IBurgerBuilderState } from '../../../containers/BurgerBuilder'

interface IbuildControlsProps extends IBurgerBuilderState {
  addIngredient: (igType: ingredientType) => void
  removeIngredient: (igType: ingredientType) => void
}

const MainControls = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2xp 1xp #ccc;
  margin: auto;
  padding: 10px 0;
`

const PriceParagraph = styled.p`
  font-weight: bold;
`

const ModalButton = styled.button`
  background-color: #dad735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
`

// BuildControls data optional
const buildContolsData: Array<{ label: string; type: ingredientType }> = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls: React.SFC<IbuildControlsProps> = props => {
  const createBuildControls = (data: Array<{ label: string; type: ingredientType }>) =>
    data.map(row => (
      <BuildControl
        ingredients={props.ingredients}
        key={row.label}
        label={row.label}
        type={row.type}
        addIngredient={() => props.addIngredient(row.type)}
        removeIngredient={() => props.removeIngredient(row.type)}
      />
    ))
  return (
    <MainControls>
      <PriceParagraph>Current Price : ${props.totalPrice.toFixed(2)}</PriceParagraph>
      {createBuildControls(buildContolsData)}
      <ModalButton>ORDER NOW</ModalButton>
    </MainControls>
  )
}

export default buildControls
