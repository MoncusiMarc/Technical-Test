import React from 'react'
import { useSelector } from 'react-redux'
import UserElement from '../UserElement'
import { Flexbox } from './styles'

const UsersList = () => {
  const Users = useSelector((state) => state)
  console.log(Users)
  return (
    <Flexbox>
    {Users.map((user) => (
      <UserElement key={user.email} props={user} />
    ))}
    </Flexbox>
  )
}

export default UsersList
