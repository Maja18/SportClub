import React, {useState, useReducer} from 'react';
import {Button,Form,FormGroup,Input,Label} from 'reactstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { UPDATE_FORM, onInputChange, onFocusOut } from '../../lib/formUtils'
import Person from '../../model/Person';
import ButtonContainerDiv from '../../styled-components/ButtonContainerDiv';
import ErrorDiv from '../../styled-components/Error';
import RoleInput from '../../styled-components/RoleInput';
import RoleLabel from '../../styled-components/RoleLabel';
import Title from '../../styled-components/Title';
import DivRegister from '../../styled-components/DivRegister';
import axiosInstance from '../../axios-api/axios_instance';

   const initialState: State = {
    name: { value: "", touched: false, hasError: true, error: "" },
    email: { value: "", touched: false, hasError: true, error: "" },
    password: { value: "", touched: false, hasError: true, error: "" },
    lastName: { value: "", touched: false, hasError: true, error: "" },
    isFormValid: false,
    }

    type Action =
        | { type: "UPDATE_FORM"; payload: string ;
            data: Data
    }

    type Data = {
        name: string, 
        value: string, 
        hasError : boolean, 
        error: string, 
        touched: boolean, 
        isFormValid: boolean
    }

    type State = {
        name: StateValue,
        lastName: StateValue,
        email: StateValue,
        password: StateValue
        isFormValid: boolean
    }

    type StateValue = {
        value: string, 
        hasError : boolean, 
        error: string, 
        touched: boolean
    }

    const formsReducer = (state: State, action: Action) => {
        switch (action.type) {
          case UPDATE_FORM:
            const { name, value, hasError, error, touched, isFormValid } = action.data
            return {
              ...state,
              [name]: { ...state, value, hasError, error, touched },
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

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        localStorage.removeItem('token');

        const person: Person = {
            id: 0,
            firstName: enteredName,
            lastName: enteredLastName,
            email: enteredEmail,
            password: enteredPassword,
            role: enteredRole
        }

        axiosInstance.post('/auth/register', person)
        .then(response => {
            showToastMessage()
            navigateTo('/login')
        })
        .catch(response => {
            alert(response.response.data.message);
        });
    };

    return(
        <DivRegister>
            <Title>Register</Title>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input
                    type="text"
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
                        <ErrorDiv>
                            {formState.name.error}
                        </ErrorDiv>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Last name</Label>
                    <Input
                    type="text"
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
                        <ErrorDiv>
                            {formState.lastName.error}
                        </ErrorDiv>
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
                        <ErrorDiv>
                            {formState.email.error}
                        </ErrorDiv>
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
                        <ErrorDiv>
                            {formState.password.error}
                        </ErrorDiv>
                    )}
                </FormGroup>
                <FormGroup>
                    <div>
                        <input 
                        type="radio" 
                        value="EDITOR" 
                        name="role" 
                        checked={enteredRole === "EDITOR"}
                        onChange={event => {
                            setEnteredRole(event.target.value)
                        }}
                        />
                        <RoleLabel>EDITOR</RoleLabel>
                        <RoleInput 
                        type="radio" 
                        value="VIEWER" 
                        name="role" 
                        checked={enteredRole === "VIEWER"}
                        onChange={event => {
                            setEnteredRole(event.target.value)
                        }}
                        /> 
                        <RoleLabel>VIEWER</RoleLabel>
                    </div>
                </FormGroup>
                <ButtonContainerDiv>
                    <Button color="success">Submit</Button>
                </ButtonContainerDiv>
            </Form>
            <div>
                <ToastContainer />
            </div>
        </DivRegister>
    );
};

export default Register