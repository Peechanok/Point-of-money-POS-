import React,  { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import styled from "styled-components";
import bgImg from "../src/assets/bg.jpg";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Start from './components/Start';
import Routing from './route/Route';
import rootReducer from './store/reducers/rootReducer'
import Login from './components/Login';
// class App extends Component {

//   render() {
//     const store = createStore(rootReducer);
//     return (

//       <Provider store={store}>
//         <Wrapper>
//           <Routing />
//         </Wrapper>
//       </Provider>


//     );
//   }
// }
function App() {
  // const [token, setToken] = useState();
  const getToken = () => {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
};
const saveToken = userToken => {
  localStorage.setItem('token', JSON.stringify(userToken));
  setToken(userToken.token);
};
  const [ token, setToken ] = useState(getToken());
  const store = createStore(rootReducer);

  //  setToken: saveToken,token
  
  if(!token) {
    
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
      <Provider store={store}>
        <Switch>
            <Routing />
        </Switch>
       </Provider>
      </BrowserRouter>
    </div>
  );
}
const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  width: 100%;
  height: 100%;
 
  justify-content: center;
`;
export default App;