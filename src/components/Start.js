import React from "react";
import styled from "styled-components";
import bgImg from "../assets/bg.jpg";
import Login from "./Login";
import Mainlogin from "./mainlogin";
import Registers from "./Registers";
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Routing from "../route/Route";
const Start = () => {
  return (

    <div>
    <Container>
      <Wrapper>
        <Login />
        <Mainlogin />
      </Wrapper>
      </Container>
      <Router>
                    
                
                    <Route exact path={"/Registers"} component={Registers} />
                    <Route  path={"/Home"} component={Routing} />
                </Router>

     
 </div>
);
};

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
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export default Start;
