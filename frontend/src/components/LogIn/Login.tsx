import React, {useState, useContext} from 'react';
import {Button,Form,FormGroup,Input,Label} from 'reactstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from '../../context/auth-context';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';

const DivStyle = styled.div`
    border: 2px solid #d3d3d3;
    border-radius: .5em;
    margin-bottom: 1em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    padding: 1em;
    text-align: left;
    width: 600px;

    form {
        padding: 10px;
    }

    label {
        margin-top: 10px;
        font-weight: 600;
    }
    
    .h2{
        text-align: center;
    }

    .button-container-div{
        text-align: center; 
    }
 `;

const Login = () =>  {
    const [enteredEmail, setEnteredEmail] = useState<string>('');
    const [enteredPassword, setEnteredPassword] = useState<string>('');
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

        type Data = {
            email: string,
            password: string
        }

        const data:Data = {
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
        <DivStyle>
            <h2 className="h2">LogIn</h2>
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
                <div className="button-container-div">
                    <Button color="success">Submit</Button>
                </div>
            </Form>
            <div>
                <ToastContainer />
            </div>
        </DivStyle>
    );

};

export default Login;