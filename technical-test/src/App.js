import './App.css'
import ListElement from './Components/DataElements/index.jsx'
import { data } from './Components/DataElements/Data.js'

function App () {
  return (
    data.map((user) =>
      <ListElement key={user.email} props={user} />
    )
  )
}

export default App
