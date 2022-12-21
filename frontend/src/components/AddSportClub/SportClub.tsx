import React, {useState, useReducer} from 'react'; 
import {Button,Card,CardBody,CardHeader,Input,Label} from 'reactstrap';
import { FcSportsMode } from 'react-icons/fc';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { UPDATE_FORM, onInputChange, onFocusOut, validateInput } from '../../lib/formUtils'
import { ToastContainer, toast } from 'react-toastify';
import CardStyle from '../../styled-components/CardStyle';
import AddClub from '../../model/AddClub';
import ButtonContainerDiv from '../../styled-components/ButtonContainerDiv';
import ErrorDiv from '../../styled-components/Error';
import axiosInstance from '../../axios-api/axios_instance';
import { showToastMessage } from '../../toasts/ToastMessage';

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
            isFormValid: false,
        }

const SportClub = () => {
    const [enteredName, setEnteredName] = useState('');
    const navigate = useNavigate();
    const [formState, dispatch] = useReducer(formsReducer, initialState)

    const addClub = () => {
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
        if (isFormValid) {
            const newClub : AddClub= {
                name: enteredName
            }

            axiosInstance.post('/club', newClub).then(response => {
                showToastMessage('You have sussessufully added club!')
                setTimeout(() => {
                    navigate('/sportClubs')
                }, 3000); 
            })
            .catch(response => {
                alert("Please enter valid data!");
                console.log(response);
            });
        }
    };

    return(
        <CardStyle>
            <Card>
                <CardHeader tag="h5">
                    <FcSportsMode size={30}/>
                </CardHeader>
                <CardBody>
                    <Label for="exampleEmail">Name</Label>
                        <Input
                        type="text"
                        name="name"
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
                    <ButtonContainerDiv>
                        <Button color="success" onClick={addClub}>Add</Button>
                    </ButtonContainerDiv>
                </CardBody>
            </Card>
            <div>
                <ToastContainer />
            </div>
        </CardStyle>       
    );
};

export default SportClub;