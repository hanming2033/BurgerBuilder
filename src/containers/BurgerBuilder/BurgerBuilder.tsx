import * as React from 'react'

export interface IBurgerBuilderProps {
  a?: string
}

export interface IBurgerBuilderState {
  a?: string
}

export default class BurgerBuilder extends React.Component<IBurgerBuilderProps, IBurgerBuilderState> {
  public render() {
    return (
      <>
        <div>Burger</div>
        <div>Build Control</div>
      </>
    )
  }
}
