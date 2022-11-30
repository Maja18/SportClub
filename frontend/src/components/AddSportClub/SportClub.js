import React, {useState, useReducer} from 'react'; 
import {Button,Card,CardBody,CardHeader,Input,Label} from 'reactstrap';
import { FcSportsMode } from 'react-icons/fc';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { UPDATE_FORM, onInputChange, onFocusOut, validateInput } from '../../lib/formUtils'
import { ToastContainer, toast } from 'react-toastify';

const formsReducer = (state, action) => {
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
    isFormValid: false,
}

const SportClub = () => {
    const [enteredName, setEnteredName] = useState('');
    const navigateTo = useNavigate();
    const [formState, dispatch] = useReducer(formsReducer, initialState)
    const [showError, setShowError] = useState(false)

    const showToastMessage = () => {
        toast.success('You have sussessufully added club!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1000,
            onClose: () => navigateTo('/sportClubs')
        });
    };

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
        if (!isFormValid) {
        setShowError(true)
        } else {
            const data = {
                name: enteredName
            }

            let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
            axios.post('http://localhost:8080/api/club', data, {
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
    };

    return(
        <div className='Card'>
            <Card style={{
                    width: '40rem'
            }}>
                <CardHeader tag="h5" style={{backgroundColor: '#f1f1f1'}}>
                <FcSportsMode size={30}/>
                </CardHeader>
                <CardBody>
                    <Label for="exampleEmail">Name</Label>
                        <Input
                        type="name"
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
                            <div className="error">
                                {formState.name.error}
                            </div>
                        )}
                    <div class="button-container-div">
                        <Button style={{marginTop:'30px', width:'100px'}} color="success" onClick={addClub}>Add</Button>
                    </div>
                </CardBody>
            </Card>
            <div>
                <ToastContainer />
            </div>
        </div>       
    );
};

export default SportClub;