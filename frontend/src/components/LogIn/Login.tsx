import React, {useState, useContext} from 'react';
import {Button,Form,FormGroup,Input,Label} from 'reactstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from '../../context/auth-context';
import { ToastContainer, toast } from 'react-toastify';
import LoginData from '../../model/LoginData';
import ButtonContainerDiv from '../../styled-components/ButtonContainerDiv';
import Title from '../../styled-components/Title';
import DivLogin from '../../styled-components/DivLogin';
import axiosInstance from '../../axios-api/axios_instance';

const Login = () =>  {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const navigateTo = useNavigate();
    const authContext = useContext(AuthContext);

    const showToastErrorMessage = () => {
        toast.error('Please enter valid data!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1000
        });
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        localStorage.removeItem('token');

        const loginData: LoginData = {
            email: enteredEmail,
            password: enteredPassword
        }

        axiosInstance.post('/auth/login', loginData)
        .then(response => {
            localStorage.setItem('token', JSON.stringify(response.data.accessToken));
            authContext.auth()
            navigateTo('/profile')
        })
        .catch(response => {
            showToastErrorMessage()
        }); 
    };

    return(
        <DivLogin>
            <Title>LogIn</Title>
            <Form onSubmit={onSubmit}>
                <FormGroup >
                    <Label for="exampleEmail">Email</Label>
                    <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="example@example.com"
                    required={true}
                    value={enteredEmail}
                    onChange={(event) => {
                        setEnteredEmail(event.target.value);
                      }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                    required={true}
                    value={enteredPassword}
                    onChange={event => {
                        setEnteredPassword(event.target.value)
                    }}
                    />
                </FormGroup>
                <ButtonContainerDiv>
                    <Button color="success">Submit</Button>
                </ButtonContainerDiv>
            </Form>
            <div>
                <ToastContainer />
            </div>
        </DivLogin>
    );

};

export default Login;