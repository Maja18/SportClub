import React, {useState, useEffect, useReducer} from 'react'; 
import {Button,Card,CardBody,CardHeader,Input,Label} from 'reactstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { MdOutlineSportsKabaddi } from 'react-icons/md';
import Multiselect from 'multiselect-react-dropdown';
import { UPDATE_FORM, onInputChange, onFocusOut, validateInput } from '../../lib/formUtils'
import { ToastContainer, toast } from 'react-toastify';
import Skill from '../../model/Skill';
import CardStyle from '../../styled-components/CardStyle';
import ButtonDivStyle from '../../styled-components/ButtonDivStyle';
import styled from 'styled-components';

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
        salary: StateValue,
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
    salary: { value: "", touched: false, hasError: true, error: "" },
    isFormValid: false,
}

const DropdownStyle = styled.div`
    margin-top:30px;
`;

const UploadButtonStyle = styled.button`
    margin-top:15px;
`;

const Player = () => {
    const [enteredName, setEnteredName] = useState<string>('');
    const [enteredSalary, setEnteredSalary] = useState<string>('');
    const [fileName, setFileName] = useState<string>('');
    const [selectedFiles, setSelectedFiles] = useState<File | null>(null);
    const [currentFile, setCurrentFile] = useState<File | undefined>(undefined);
    const [skills, setSkills] = useState<Skill []>([])
    const [playerSkills, setPlayerSkills] = useState<Skill []>([])
    const navigateTo = useNavigate();
    const [formState, dispatch] = useReducer(formsReducer, initialState)

    useEffect(() => {
        let value: string = localStorage.getItem('token')!;
        let token: string = value.substring(1,value.length-1);
        axios.get('http://localhost:8080/api/skill',{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
                setSkills(response.data)
         }).catch(res => {
                alert("Error");
                console.log(res);
            });

    }, []);

    const showToastMessage = () => {
        toast.success('You have sussessufully added new player!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1000,
            onClose: () => navigateTo('/players')
        });
    };

    const addPlayer = () => {
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

            type Data = {
                playerName: string,
                salary: string,
                image: string,
                playerSkills: Skill []
            }

            const data: Data = {
                playerName: enteredName,
                salary: enteredSalary,
                image: fileName,
                playerSkills: playerSkills
            }

            let value: string = localStorage.getItem('token')!;
            let token: string = value.substring(1,value.length-1);
            axios.post('http://localhost:8080/api/player', data, {
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
    };

    const selectFile = (event: React.FormEvent<HTMLInputElement> ) => {
        if (event.currentTarget.files !== null){
            setSelectedFiles(event.currentTarget.files[0]);
        }
    };

    const uploadImage = () => {
        if ( selectedFiles !== null){
            let currentFile = selectedFiles;

            setCurrentFile(currentFile);
            upload(currentFile)
            .catch(() => {
                setCurrentFile(undefined);
            });
            setSelectedFiles(null);
        }
    };

    const upload = (file: File) => {
        let formData = new FormData();
      
        formData.append("file", file);
        let value: string = localStorage.getItem('token')!;
        let token: string = value.substring(1,value.length-1);
      
        return axios.post("http://localhost:8080/api/player/saveImage", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': 'Bearer ' + token
          }  
        }).then(response => {
            setFileName(response.data)
        })
        .catch(response => {
            console.log(response.data)
            alert("Something went wrong with uploading image")
        });  
    };

    const onSelect = (skills: Skill []) => {
        setPlayerSkills(skills)
    }

    return(
        <CardStyle>
            <Card>
                <CardHeader tag="h5">
                    <MdOutlineSportsKabaddi size={25}/>
                    <span>Player</span>
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
                            <div className="error">
                                {formState.name.error}
                            </div>
                        )}
                    <Label for="exampleEmail">Salary</Label>
                        <Input
                        type="text"
                        name="salary"
                        id="exampleSalary"
                        placeholder="Salary"
                        value={formState.salary.value}
                        onChange={e => {
                            onInputChange("salary", e.target.value, dispatch, formState)
                            setEnteredSalary(e.target.value)
                        }}
                        onBlur={e => {
                            onFocusOut("salary", e.target.value, dispatch, formState)
                        }}
                        />
                        {formState.salary.touched && formState.salary.hasError && (
                            <div className="error">
                                {formState.salary.error}
                            </div>
                        )}
                    <Label for="exampleEmail">Choose profile picture</Label>
                        <Input
                        type="file"
                        name="image" 
                        accept="image/png, image/jpeg"
                        id="file" 
                        onChange={selectFile}
                    />
                    <Button className="uploadButton"
                        color="success" 
                        disabled={!selectedFiles}
                        onClick={uploadImage}> Upload
                    </Button>

                    {/* Dropdown */}
                    <DropdownStyle>   
                        <Multiselect
                        placeholder='Select skills'
                        options={skills} 
                        onSelect={(skills) => onSelect(skills)} 
                        displayValue="name"
                        />
                    </DropdownStyle>
                    <div className="button-container-div">
                        <Button color="success" onClick={addPlayer} >Add</Button>
                    </div>
                </CardBody>
            </Card>
            <div>
                <ToastContainer />
            </div>
        </CardStyle>
    )
};

export default Player;