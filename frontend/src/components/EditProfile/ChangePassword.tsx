import React, {useState, useReducer} from 'react';
import { useLocation } from 'react-router-dom';
import {Button,Card,CardBody,CardText,Label,CardHeader,Input} from 'reactstrap';
import { CgProfile } from 'react-icons/cg';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { UPDATE_FORM, onInputChange, onFocusOut, validateInput } from '../../lib/formUtils'
import { ToastContainer, toast } from 'react-toastify';
import CardStyle from '../../styled-components/CardStyle';
import PasswordChanger from '../../model/PasswordChanger';
import ButtonContainerDiv from '../../styled-components/ButtonContainerDiv';
import ErrorDiv from '../../styled-components/Error';
import FormErrorDiv from '../../styled-components/FormError';
import personAxiosInstance from '../../axios-api/person_axios_instance';

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
            password: StateValue,
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
            const changePasswordData: PasswordChanger = {
                userId: location.state.userInfo.id,
                newPassword: enteredNewPassword
            }

            personAxiosInstance.post('/change-password', changePasswordData).then(response => {
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
        <CardStyle>
            <Card>
                <CardHeader tag="h5" >
                <CgProfile size={30}/>
                    <span>Profile Info</span>
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
                            <ErrorDiv>
                                {formState.password.error}
                            </ErrorDiv>
                        )}
                    </CardText>
                    {showError && !formState.isFormValid && (
                        <FormErrorDiv>Please fill all the fields correctly</FormErrorDiv>
                    )}
                    <ButtonContainerDiv>
                        <Button color='info' onClick={changePassword} >Save</Button>
                    </ButtonContainerDiv>
                </CardBody>
            </Card>
            <div>
                <ToastContainer />
            </div>
        </CardStyle>
    );
}

export default ChangePassword;
