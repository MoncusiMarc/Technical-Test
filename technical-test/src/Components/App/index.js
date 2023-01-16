import axios from "axios";
import React from "react";
import './styles'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { UsersReducer } from '../reducers/UsersReduce'
import { data } from '../reducers/Data'
import UsersList from '../UsersList'
import Buttons from '../Button'



const client = axios.create({
  baseURL: "https://randomuser.me/api" 
});

function RequestAPI() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    client.get("/?results=6").then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return "No post!"
  return post
}


const store = createStore(UsersReducer)

function App () {
  const request = RequestAPI()
  console.log(request)
  console.log(request.results)
  if(request.results != null){
    request.results.map((user) => (
      data.push(user)
    ))
  }
  console.log(data)
  return (
    <Provider store={store}>
      <UsersList />
      <Buttons />
    </Provider>
  )
}

export default App