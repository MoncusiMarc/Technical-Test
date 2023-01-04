import './styles'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { UsersReducer } from '../reducers/UsersReduce'
import UsersList from '../UsersList'
import Buttons from '../Button'

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