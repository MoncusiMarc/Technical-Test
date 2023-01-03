import React from 'react'
import { Button } from './styles'

const Buttons = () => {
  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <Button
      onClick={event => { handleClick(event) }}
    >
      Next
    </Button>
  )
}
export default Buttons
