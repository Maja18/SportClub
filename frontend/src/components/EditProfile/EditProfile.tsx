import React, {useEffect, useReducer, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {Button,Card,CardBody,CardText,Label,CardHeader,Input} from 'reactstrap';
import { CgProfile } from 'react-icons/cg';
import './EditProfile.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { UPDATE_FORM, onInputChange, onFocusOut, validateInput } from '../../lib/formUtils'
import { ToastContainer, toast } from 'react-toastify';

    type Action =
        | { type: "UPDATE_FORM"; payload?: any ;
            data: any
        } | { type: "INITIALIZE_STATE"; payload: any ;}

    const formsReducer = (state: typeof initialState, action: Action) => {
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

    const initialState = {
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
                ...initialState,
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

            const data = {
                id: location.state.userInfo.id,
                firstName: enteredName,
                lastName: enteredLastName,
                email: enteredEmail,
                role: enteredRole
            }

            //let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
            let value: string = localStorage.getItem('token')!;
            let token: string = value.substring(1,value.length-1);
            axios.put('http://localhost:8080/api/person', data, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            })
                    .then(response => {
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
        <div className='Card'>
            <Card >
                <CardHeader tag="h5">
                    <CgProfile size={30}/>
                    <span style={{marginLeft:'10px'}}>Profile Info</span>
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
                            <div className="error">
                                {formState.name.error}
                            </div>
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
                            <div className="error">
                                {formState.lastName.error}
                            </div>
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
                            <div className="error">
                                {formState.email.error}
                            </div>
                        )}
                        <Label>
                            Role: 
                        </Label>
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
                        <label className="label">EDITOR</label>
                        <input 
                        className="roleInput" 
                        type="radio" 
                        value="VIEWER" 
                        name="role" 
                        checked={enteredRole === "VIEWER"}
                        onChange={event => {
                            setEnteredRole(event.target.value)
                        }}
                        /> 
                        <label className="label">VIEWER</label>
                        </div>
                    </CardText>
                    {showError && !formState.isFormValid && (
                        <div className="form_error">Please fill all the fields correctly</div>
                    )}
                    <div className="button-container-div">
                        <Button color='info' onClick={onSubmit}>Save</Button>
                    </div>
                </CardBody>
            </Card>
            <div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default EditProfile;