import { Flexbox } from './styles'
import ListElement from '../DataElements/index'
import { data } from '../DataElements/Data'

function App () {
  return (
    <Flexbox>
    {data.map((user) =>
      <ListElement key={user.email} props={user} />
    )}
    </Flexbox>
  )
}

export default App
