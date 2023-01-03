import React from 'react'
import { Button } from './styles'
import { data } from '../reducers/Data'
import { addUser, deleteUsers } from '../reducers/UsersReduce'
import { useDispatch, useSelector } from 'react-redux'

const Buttons = () => {

  const Users = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleClick = (e) => {
    switch(data.length){
      case 0:
        Users.map((user) => (
          data.push(user)
        ))
      dispatch(deleteUsers())
        break
      default:
        dispatch(addUser(data.shift()))
        break
    }
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
