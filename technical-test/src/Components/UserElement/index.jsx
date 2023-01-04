import React from 'react'
import { Element, Image, Name, Email } from './styles'

const UserElement = ({ props }) => {
  const picture = props.picture.medium
  const name = props.name.first + ' ' + props.name.last
  const email = props.email
  return (
    <Element>
      <Image src={picture} alt={name} />
      <Name> {name}</Name>
      <Email> {email}</Email>
    </Element>
  )
}

export default UserElement
