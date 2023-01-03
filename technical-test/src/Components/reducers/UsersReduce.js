export const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'add_user': {
      return [...state, action.payload]
    }
    case 'delete_users': {
      state = []
      return state
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
export const deleteUsers = () => ({
  type: 'delete_users'
})
