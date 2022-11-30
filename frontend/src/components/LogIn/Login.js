import React, {useState, useContext} from 'react';
import './Login.css';
import {Button,Form,FormGroup,Input,Label} from 'reactstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from '../../context/auth-context';
import { ToastContainer, toast } from 'react-toastify';

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

    const onSubmit = (event) => {
        event.preventDefault();

        localStorage.removeItem('token');

        const data = {
            email: enteredEmail,
            password: enteredPassword
        }

        axios.post('http://localhost:8080/api/auth/login', data)
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
        <div className="Login">
            <h2 class="h2">LogIn</h2>
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
                <div class="button-container-div">
                    <Button color="success">Submit</Button>
                </div>
            </Form>
            <div>
                <ToastContainer />
            </div>
        </div>
    );

};

export default Login;