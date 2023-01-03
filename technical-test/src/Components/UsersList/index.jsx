import React from 'react'
import { useSelector } from 'react-redux'
import UserElement from '../UserElement'
import {} from './styles'

const UsersList = () => {
  const Users = useSelector((state) => state)
  return (
    Users.map((user) => (
      <UserElement key={user.email} props={user} />
    ))
  )
}

export default UsersList
