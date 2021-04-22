import React, { Component } from 'react';
import Route from './route/Route';
import "./App.css";
import styled from "styled-components";
import bgImg from "../src/assets/bg.jpg";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Start from './components/Start';
import Routing from './route/Route';
import rootReducer from './store/reducers/rootReducer'
class App extends Component {

  render() {
    const store = createStore(rootReducer);
    return (

      <Provider store={store}>
        <Wrapper>
          <Routing />
        </Wrapper>
      </Provider>


    );
  }
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