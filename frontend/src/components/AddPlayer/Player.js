import React, {useState, useEffect, useReducer} from 'react'; 
import {Button,Card,CardBody,CardHeader,Input,Label} from 'reactstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { MdOutlineSportsKabaddi } from 'react-icons/md';
import Multiselect from 'multiselect-react-dropdown';
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
    salary: { value: "", touched: false, hasError: true, error: "" },
    isFormValid: false,
}

const Player = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredSalary, setEnteredSalary] = useState('');
    const [fileName, setFileName] = useState('');
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [skills, setSkills] = useState([])
    const [playerSkills, setPlayerSkills] = useState([])
    const navigateTo = useNavigate();
    const [formState, dispatch] = useReducer(formsReducer, initialState)

    useEffect(() => {
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
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
            const data = {
                playerName: enteredName,
                salary: enteredSalary,
                image: fileName,
                playerSkills: playerSkills
            }

            let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
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

    const selectFile = (event) => {
        setSelectedFiles(event.target.files);
    };

    const uploadImage = () => {
        let currentFile = selectedFiles[0];
        setCurrentFile(currentFile);
    
        upload(currentFile)
          .catch(() => {
            setCurrentFile(undefined);
          });
          setSelectedFiles(undefined);
    };

    const upload = (file) => {
        let formData = new FormData();
      
        formData.append("file", file);
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
      
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

    const onSelect = (event) => {
        setPlayerSkills(event)

    }

    return(
        <div className='Card'>
            <Card>
                <CardHeader tag="h5">
                    <MdOutlineSportsKabaddi size={25}/>
                    <span style={{marginLeft:'10px'}}>Player</span>
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
                    <Label for="exampleEmail">Salary</Label>
                        <Input
                        type="name"
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
                    <Button style={{marginTop:'10px'}}
                        className="btn btn-success"
                        disabled={!selectedFiles}
                        onClick={uploadImage}> Upload
                    </Button>

                    {/* Dropdown */}
                    <div style={{marginTop:'30px'}}>   
                        <Multiselect
                        placeholder='Select skills'
                        options={skills} 
                        selectedValues={this.selectedValue} 
                        onSelect={(event) => onSelect(event)} 
                        displayValue="name"
                        />
                    </div>
                    
                    <div class="button-container-div">
                        <Button style={{marginTop:'30px', width:'100px'}} color="success" onClick={addPlayer} >Add</Button>
                    </div>
                </CardBody>
            </Card>
            <div>
                <ToastContainer />
            </div>
        </div>
    )

};

export default Player;