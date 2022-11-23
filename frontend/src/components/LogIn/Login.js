import React, {useState} from 'react';
import './Login.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
import axios from 'axios'

const Login = () =>  {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [authority, setAuthority] = useState('');

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
                    console.log(response.data.token);
                    
                    let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
                    alert("You have successufully logged")
                })
                .catch(response => {
                    alert("Please enter valid data!");
                    console.log(response);
                 });   
    };

    return(
        <div className="Login">
            <h2 class="h2">LogIn</h2>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="example@example.com"
                    value={enteredEmail}
                    onChange={event => {
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
                    value={enteredPassword}
                    onChange={event => {
                        setEnteredPassword(event.target.value)
                    }}
                    />
                </FormGroup>
                <div class="button-container-div">
                    <Button color="success" onClick={onSubmit}>Submit</Button>
                </div>
            </Form>
        </div>
    );

};

export default Login;