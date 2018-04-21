import * as React from 'react'
import styled from '../../my-styled-components'
import BurgerIngredient, { ingredientType } from './BurgerIngredient'

interface IburgerProps {
  ingredients: {
    salad?: number
    bacon?: number
    cheese?: number
    meat?: number
  }
}

const Burger = styled.div`
  width: 100%;
  margin: auto;
  height: calc(100vw * 0.9);
  /* overflow: scroll; */
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`
// recursive function to add ingredient types into an array
const addToArray = (igType: ingredientType, num: number, arr: any[]) => {
  if (num <= 0) {
    return
  }
  arr.push(<BurgerIngredient key={igType + num} type={igType} />)
  num--
  addToArray(igType, num, arr)
}

const burger: React.SFC<IburgerProps> = props => {
  // takes the ingredients object from props and split it into arrays of ingredient
  // Object.keys(props.ingredients): take the keys of an object
  const burgerIngredients: JSX.Element[] | JSX.Element = Object.keys(props.ingredients).reduce((arr: any[], igType: ingredientType) => {
    addToArray(igType, props.ingredients[igType], arr)
    return arr
  }, [])

  return (
    <Burger>
      <BurgerIngredient type="bread-top" />
      {burgerIngredients}
      <BurgerIngredient type="bread-bottom" />
    </Burger>
  )
}

export default burger
