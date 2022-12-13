import React, {useState, useReducer} from 'react';
import { useLocation } from 'react-router-dom';
import {Button,Card,CardBody,CardText,Label,CardHeader,Input} from 'reactstrap';
import { CgProfile } from 'react-icons/cg';
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
    password: { value: "", touched: false, hasError: true, error: "" },
    isFormValid: false,
}

const ChangePassword = () => {
    const location = useLocation();
    const [enteredNewPassword, setEnteredNewPassword] = useState('');
    const [formState, dispatch] = useReducer(formsReducer, initialState)
    const [showError, setShowError] = useState(false)
    let navigateTo = useNavigate(); 

    const showToastMessage = () => {
        toast.success('You have sussessufully changed password, please log in!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1000,
            onClose: () => navigateTo('/login')
        });

    };

    const changePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
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
            event.preventDefault()
            const data = {
                userId: location.state.userInfo.id,
                newPassword: enteredNewPassword
            }

            let value: string = localStorage.getItem('token')!;
            let token: string = value.substring(1,value.length-1);
            axios.post('http://localhost:8080/api/person/change-password', data, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            })
                    .then(response => {
                        showToastMessage()
                    })
                    .catch(response => {
                        alert("Please enter valid data!");
                        console.log(response);
                    });   
        }
        // Hide the error message after 5 seconds
        setTimeout(() => {
            setShowError(false)
        }, 5000)
    }

    return(
        <div className='Card'>
            <Card>
                <CardHeader tag="h5" >
                <CgProfile size={30}/>
                    <span style={{marginLeft:'10px'}}>Profile Info</span>
                </CardHeader>
                <CardBody>
                    <CardText>
                        <Label>
                            New password: 
                        </Label>
                        <Input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        placeholder="*************"
                        value={formState.password.value}
                        onChange={e => {
                            onInputChange("password", e.target.value, dispatch, formState)
                            setEnteredNewPassword(e.target.value)
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
                    </CardText>
                    {showError && !formState.isFormValid && (
                        <div className="form_error">Please fill all the fields correctly</div>
                    )}
                    <div className="button-container-div">
                        <Button color='info' onClick={changePassword} >Save</Button>
                    </div>
                </CardBody>
            </Card>
            <div>
                <ToastContainer />
            </div>
        </div>

    );
}

export default ChangePassword;