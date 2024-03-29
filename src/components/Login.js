import React, { useState } from 'react';
import styled from "styled-components";
import logo from "../assets/pos.png";
import Input from "./Input";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Home from "../contents/Home";
import Routing from "../route/Route";
import { createStore } from 'redux';
import bgImg from "../../src/assets/bg.jpg";
import { Provider } from 'react-redux';
import rootReducer from '../store/reducers/rootReducer'
import PropTypes from 'prop-types';
async function loginUser(credentials) {
  return fetch('/api/user/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}
const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    console.log(token)
    console.log(setToken)
  }
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          POS <span>Point of Money</span>
        </h3>
      </LogoWrapper>
      <Form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <Input type="username" placeholder="Username" onChange={e => setUserName(e.target.value)} />
        <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button type="submit">Sign In</button>

      </Form>
      {/* <div>

       <h4>
           Have an account? <span> <Nav.Link href="/Registers">Sing up</Nav.Link></span>
        </h4>
      </div> */}
    </Container>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  width: 100%;
  height: 100%;
 
  justify-content: center;
`;
const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }

  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 1200px) {
    width: 200vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

export default Login;