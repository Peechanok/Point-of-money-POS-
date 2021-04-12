import React , { useState }  from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/pos.png";
import Input from "./Input";
import Nav from 'react-bootstrap/Nav';
import { Dropdown } from 'semantic-ui-react'
import Select from 'react-select'
import ImageUploading from 'react-images-uploading';
const Registers = () => {
 
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
 
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          POS <span>Point of Money</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="username" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {/* <Input type="picture" placeholder="Picture" /> */}
       {/* <Dropdown  placeholder='Select Role'   fluid   selection   options={RoleOptions} />
    */}


   <DropDownContainer>
        <DropDownHeader onClick={toggling} >
          {selectedOption || " Select Role"} 
        </DropDownHeader >
        {isOpen && (
          <DropDownListContainer>
            <DropDownList  >
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
   
   
   
      <div className="upload-image">
      
<ImageUploading 
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
       
      >
    
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button  style={{ height: 40,width: 40, marginTop: 10 ,marginRight:18 ,backgroundColor: '#DDDDDD', }}
              // style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Select Picture!
            </button>
            &nbsp;
            {/* <button style={{ height: 40,width: 40, marginTop: 10 ,marginRight:18 }} onClick={onImageRemoveAll} >Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button style={{backgroundColor: '#0099FF', height: 40,width: 40, marginTop: 10 ,marginRight:18 }}  onClick={() => onImageUpdate(index)}>Update</button>
                  <button style={{ backgroundColor: '#FF0033',height: 40,width: 40, marginTop: 10 ,marginRight:18 }} onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
     
      </div>

     
 
        <button>Sign Up</button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <span><Nav.Link href="/Login">Sing In</Nav.Link></span>
        </h4>
      </div>
    </Container>
  );
};

const DropDownHeader = styled("div")`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  color:#767676;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }
`;
const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 40vh;
`;
const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;
  ${DropDownHeader}:focus + & {
    background: #ffa689;
  }
  ${DropDownHeader}:invalid + & {
    background: #fe2f75;
  }
  ${DropDownHeader}:valid + & {
    background: #70edb9;
  }
`;
const DropDownContainer = styled("div")`
  width: 17em;
  margin: 0 auto;
`;



const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 0.1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1rem;
  font-weight: 200;
  &:first-child {
    padding-top: 0.1em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: -1.5em;
`;

const options = ["Manager", "Employee", "Admin"];
const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;
const Containera = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Containerb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  hight:100px;
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

  @media (max-width: 900px) {
    width: 100vw;
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

export default Registers;
