export const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'add_user': {
      return [...state, action.payload]
    }
    case 'delete_users': {
      return []
    }
    default: {
      return state
    }
  }
}

export const addUser = (user) => ({
  type: 'add_user',
  payload: user
})
export const deleteUser = () => ({
  type: 'delete_user'
})
