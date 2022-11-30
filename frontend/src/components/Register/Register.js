import React, {useState, useReducer} from 'react';
import {Button,Form,FormGroup,Input,Label} from 'reactstrap';
import './Register.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { UPDATE_FORM, onInputChange, onFocusOut } from '../../lib/formUtils'

   const initialState = {
    name: { value: "", touched: false, hasError: true, error: "" },
    email: { value: "", touched: false, hasError: true, error: "" },
    password: { value: "", touched: false, hasError: true, error: "" },
    lastName: { value: "", touched: false, hasError: true, error: "" },
    isFormValid: false,
}

    const formsReducer = (state, action) => {
        switch (action.type) {
          case UPDATE_FORM:
            const { name, value, hasError, error, touched, isFormValid } = action.data
            return {
              ...state,
              [name]: { ...state[name], value, hasError, error, touched },
              isFormValid,
            }
          default:
            return state
        }
    }

const Register = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredRole, setEnteredRole] = useState('VIEWER');
    const navigateTo = useNavigate();
    const [formState, dispatch] = useReducer(formsReducer, initialState)
  

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
                    navigateTo('/login')
                })
                .catch(response => {
                    alert(response.response.data.message);
                });   
    };

    return(
        <div className="Register">
            <h2 class="h2">Register</h2>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input
                    type="name"
                    name="firstName"
                    id="exampleName"
                    placeholder="Name"
                    required={true}
                    value={formState.name.value}
                    onChange={e => {
                        onInputChange("name", e.target.value, dispatch, formState)
                        setEnteredName(e.target.value)
                      }}
                      onBlur={e => {
                        onFocusOut("name", e.target.value, dispatch, formState)
                      }}
                    />
                    {formState.name.touched && formState.name.hasError && (
                        <div className="error">
                            {formState.name.error}
                        </div>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Last name</Label>
                    <Input
                    type="name"
                    name="lastName"
                    id="exampleLastName"
                    placeholder="Last name"
                    required={true}
                    value={formState.lastName.value}
                    onChange={e => {
                        onInputChange("lastName", e.target.value, dispatch, formState)
                        setEnteredLastName(e.target.value)
                      }}
                    onBlur={e => {
                        onFocusOut("lastName", e.target.value, dispatch, formState)
                      }}
                    />
                    {formState.lastName.touched && formState.lastName.hasError && (
                        <div className="error">
                            {formState.lastName.error}
                        </div>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="example@example.com"
                    required={true}
                    value={formState.email.value}
                    onChange={e => {
                        onInputChange("email", e.target.value, dispatch, formState)
                        setEnteredEmail(e.target.value)
                      }}
                    onBlur={e => {
                        onFocusOut("email", e.target.value, dispatch, formState)
                      }}
                    />
                    {formState.email.touched && formState.email.hasError && (
                        <div className="error">
                            {formState.email.error}
                        </div>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                    required={true}
                    value={formState.password.value}
                    onChange={e => {
                        onInputChange("password", e.target.value, dispatch, formState)
                        setEnteredPassword(e.target.value)
                      }}
                    onBlur={e => {
                        onFocusOut("password", e.target.value, dispatch, formState)
                      }}
                    />
                    {formState.password.touched && formState.password.hasError && (
                        <div className="error">
                            {formState.password.error}
                        </div>
                    )}
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
                    <label>VIEWER</label>
                    </div>
                </FormGroup>
                <div class="button-container-div">
                    <Button  color="success" >Submit</Button>
                </div>
            </Form>
            <div>
            <ToastContainer />
            </div>
        </div>
    );
};

export default Register