import './App.css'

import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { UsersReducer } from './Components/reducers/UsersReduce'
import UsersList from './Components/UsersList'
import Buttons from './Components/Button'

const store = createStore(UsersReducer)

function App () {
  return (
    <Provider store={store}>
      <UsersList />
      <Buttons />
    </Provider>
  )
}

export default App
