import React, {useState, useEffect, useReducer} from 'react'; 
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Button,Card,CardBody,CardText,Label,CardHeader,Input} from 'reactstrap';
import { FcSportsMode } from 'react-icons/fc';
import { useNavigate } from "react-router-dom";
import { UPDATE_FORM, onInputChange, onFocusOut, validateInput } from '../../lib/formUtils'
import { ToastContainer, toast } from 'react-toastify';
import Club from '../../model/Club';
import CardStyle from '../../styled-components/CardStyle';
import EditClubData from '../../model/EditClubData';
import ButtonContainerDiv from '../../styled-components/ButtonContainerDiv';
import ErrorDiv from '../../styled-components/Error';


    type Action =
        | { type: "UPDATE_FORM"; payload?: any ;
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

const EditClub = () => {
    const [club, setClub] = useState<Club>({} as Club);
    const [enteredName, setEnteredName] = useState('');
    const params = useParams();
    let navigateTo = useNavigate();
    const [formState, dispatch] = useReducer(formsReducer, initialState)
    
    useEffect(() => {
        let value = localStorage.getItem('token')!;
        let token = value.substring(1,value.length-1);
        axios.get('http://localhost:8080/api/club/' + params.id,{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
            setClub(response.data)
            dispatch({
                type: 'INITIALIZE_STATE',
                payload: {
                    name: { value: response.data.name, touched: false, hasError: true, error: "" },
                }
                })
         }).catch(res => {
                alert("Error");
                console.log(res);
            });

    }, []);

    const showToastMessage = () => {
        toast.success('You have sussessufully edited club!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1000,
            onClose: () => navigateTo('/sportClubs')
        });
    };

    const editClub = () => {
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
            const editedClub: EditClubData = {
                id: club.id,
                name: enteredName
            }

            let value = localStorage.getItem('token')!;
            let token = value.substring(1,value.length-1);
            axios.put('http://localhost:8080/api/club', editedClub, {
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

    };

    return(
        <CardStyle>
            <Card>
                <CardHeader tag="h5">
                <FcSportsMode size={30}/>
                    <span>Sport Club</span>
                </CardHeader>
                <CardBody>
                    <CardText>
                        <Label>
                            Name:  
                        </Label>
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
                    </CardText>
                    <ButtonContainerDiv>
                        <Button color="success" onClick={editClub} >Edit</Button>
                    </ButtonContainerDiv>
                </CardBody>
            </Card>
            <div>
                <ToastContainer />
            </div>
        </CardStyle>
    );
};

export default EditClub;