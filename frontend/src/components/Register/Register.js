import React, {useState} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
import './Register.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredRole, setEnteredRole] = useState('VIEWER');
    const navigateTo = useNavigate();

    const showToastMessage = () => {
        toast.success('You have sussessufully registered!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        localStorage.removeItem('token');

        const data = {
            firstName: enteredName,
            lastName: enteredLastName,
            email: enteredEmail,
            password: enteredPassword,
            role: enteredRole
        }

        axios.post('http://localhost:8080/api/auth/register', data)
                .then(response => {
                    showToastMessage()
                    //navigateTo('/profile')
                })
                .catch(response => {
                    alert("Please enter valid data!");
                    console.log(response);
                });   
    };

    return(
        <div className="Register">
            <h2 class="h2">Register</h2>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input
                    type="name"
                    name="firstName"
                    id="exampleName"
                    placeholder="Name"
                    value={enteredName}
                    onChange={event => {
                        setEnteredName(event.target.value)
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Last name</Label>
                    <Input
                    type="name"
                    name="lastName"
                    id="exampleLastName"
                    placeholder="Last name"
                    value={enteredLastName}
                    onChange={event => {
                        setEnteredLastName(event.target.value)
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="example@example.com"
                    value={enteredEmail}
                    onChange={event => {
                        setEnteredEmail(event.target.value)
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
                <FormGroup>
                    <div className='div'>
                    <input 
                    type="radio" 
                    value="EDITOR" 
                    name="role" 
                    checked={enteredRole === "EDITOR"}
                    onChange={event => {
                        setEnteredRole(event.target.value)
                    }}
                    />
                    <label class="label">EDITOR</label>
                    <input 
                    class="roleInput" 
                    type="radio" 
                    value="VIEWER" 
                    name="role" 
                    checked={enteredRole === "VIEWER"}
                    onChange={event => {
                        setEnteredRole(event.target.value)
                    }}
                    /> 
                    <label class="label">VIEWER</label>
                    </div>
                </FormGroup>
                <div class="button-container-div">
                    <Button color="success" onClick={onSubmit}>Submit</Button>
                </div>
            </Form>
            <div>
            <ToastContainer />
            </div>
        </div>
    );

};

export default Register