import React, {useEffect, useReducer, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {Button,Card,CardBody,CardText,Label,CardHeader,Input} from 'reactstrap';
import { CgProfile } from 'react-icons/cg';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { UPDATE_FORM, onInputChange, onFocusOut, validateInput } from '../../lib/formUtils'
import { ToastContainer, toast } from 'react-toastify';
import CardStyle from '../../styled-components/CardStyle';
import Person from '../../model/Person';
import ButtonContainerDiv from '../../styled-components/ButtonContainerDiv';
import ErrorDiv from '../../styled-components/Error';
import FormErrorDiv from '../../styled-components/FormError';
import RoleInput from '../../styled-components/RoleInput';
import RoleLabel from '../../styled-components/RoleLabel';
import DivStyle from '../../styled-components/DivStyle';
import axiosInstance from '../../axios-api/axios_instance';

    type Action =
        | { type: "UPDATE_FORM"; 
            data: Data
        } | { type: "INITIALIZE_STATE"; payload: any ;}

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
            email: StateValue
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
          case 'INITIALIZE_STATE': 
            return action.payload;
          default:
            return state
        }
    }

    const initialState: State = {
        name: { value: "", touched: false, hasError: true, error: "" },
        lastName: { value: "", touched: false, hasError: true, error: "" },
        email:  { value: "", touched: false, hasError: true, error: "" },
        isFormValid: false,
    }

const EditProfile = () => {
    const location = useLocation();
    const [enteredName, setEnteredName] = useState(location.state.userInfo.firstName);
    const [enteredLastName, setEnteredLastName] = useState(location.state.userInfo.lastName);
    const [enteredEmail, setEnteredEmail] = useState(location.state.userInfo.email);
    const [enteredRole, setEnteredRole] = useState(location.state.userInfo.role.substring(5));
    const [currentEmail, setCurrentEmail] = useState(location.state.userInfo.email);
    const [currentRole, setCurrentRole] = useState(location.state.userInfo.role.substring(5));
    const [formState, dispatch] = useReducer(formsReducer, initialState)
    const [showError, setShowError] = useState(false)
    let navigateTo = useNavigate(); 

    useEffect(() => {
        dispatch({
            type: 'INITIALIZE_STATE',
            payload: {
                name: { value: location.state.userInfo.firstName, touched: false, hasError: true, error: "" },
                lastName: { value: location.state.userInfo.lastName, touched: false, hasError: true, error: "" },
                email: { value: location.state.userInfo.email, touched: false, hasError: true, error: "" },
            }
            })

    }, []);

    const showToastMessage = () => {
        var path = ''
        if (currentEmail !== enteredEmail || currentRole !== enteredRole){
            path = '/login'
        }
        else{
            path = '/profile'
        }
        toast.success('You have sussessufully edited profile!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1000,
            onClose: () => navigateTo(path)
        });
    };


    const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        let isFormValid = true

        for (const name in formState) {
        const item = formState[name]
        const { value } = item
        const { hasError, error } = validateInput(name, value)
        if (hasError) {
            isFormValid = false
        }
        if (name) {
            dispatch({
            type: UPDATE_FORM,
            data: {
                name,
                value,
                hasError,
                error,
                touched: true,
                isFormValid,
            },
            })
        }
        }
        if (!isFormValid) {
            setShowError(true)
            } 
        else {
            event.preventDefault();

            const editedPerson: Person = {
                id: location.state.userInfo.id,
                firstName: enteredName,
                lastName: enteredLastName,
                email: enteredEmail,
                role: enteredRole
            }

            axiosInstance.put('/person', editedPerson).then(response => {
                showToastMessage()
            })
            .catch(response => {
                alert(response.response.data.message);
            }); 
        }
        // Hide the error message after 5 seconds
        setTimeout(() => {
            setShowError(false)
        }, 5000)
        
    };

    return(
        <CardStyle>
            <Card >
                <CardHeader tag="h5">
                    <CgProfile size={30}/>
                    <span>Profile Info</span>
                </CardHeader>
                <CardBody>
                    <CardText>
                        <Label>
                            Name: 
                        </Label>
                        <Input
                        type="text"
                        name="firstName"
                        id="exampleName"
                        placeholder="Name"
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
                        <Label>
                            Last name: 
                        </Label>
                        <Input
                        type="text"
                        name="lastName"
                        id="exampleLastName"
                        placeholder="Last name"
                        defaultValue={formState.lastName.value}
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
                        <Label>
                            Email: 
                        </Label>
                        <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="example@example.com"
                        defaultValue={formState.email.value}
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
                        <Label>
                            Role: 
                        </Label>
                        <DivStyle>
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
                        </DivStyle>
                    </CardText>
                    {showError && !formState.isFormValid && (
                        <FormErrorDiv>Please fill all the fields correctly</FormErrorDiv>
                    )}
                    <ButtonContainerDiv>
                        <Button color='info' onClick={onSubmit}>Save</Button>
                    </ButtonContainerDiv>
                </CardBody>
            </Card>
            <div>
                <ToastContainer />
            </div>
        </CardStyle>
    );
};

export default EditProfile;
