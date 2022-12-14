import React, {useState, useEffect, useReducer} from 'react'; 
import {Button,Card,CardBody,CardHeader,Input,Label,ListGroup,ListGroupItem,Badge,Dropdown,DropdownToggle,
    DropdownItem,DropdownMenu, DropdownItemProps} from 'reactstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { MdOutlineSportsKabaddi } from 'react-icons/md';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UPDATE_FORM, onInputChange, onFocusOut, validateInput } from '../../lib/formUtils'
import { ToastContainer, toast } from 'react-toastify';
import Player from '../../model/Player';
import Skill from '../../model/Skill';

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
        salary: { value: "", touched: false, hasError: true, error: "" },
        isFormValid: false,
    }

const EditPlayer = () => {
    const [enteredName, setEnteredName] = useState<string>('');
    const [enteredSalary, setEnteredSalary] = useState<string>('');
    const [fileName, setFileName] = useState<string>('');
    const [selectedFiles, setSelectedFiles] = useState<File | null>(null);
    const [currentFile, setCurrentFile] = useState<File | undefined>(undefined);
    const [imageBytes, setImageBytes] = useState<string>('')
    const [player, setPlayer] = useState<Player>({} as Player)
    const [playerSkills, setPlayerSkills] = useState<Skill []>([])
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [value,setValue] = useState<string>('Select skill');
    const [skills, setSkills] = useState<Skill []>([])
    const params = useParams();
    const [addSkills, setAddSkills] = useState<boolean>(false)
    const [dropdownSkills, setDropdonSkills] = useState<Skill []>([])
    const [isPictureChanged, setIsPictureChanged] = useState<boolean>(false)
    const navigateTo = useNavigate();
    const [formState, dispatch] = useReducer(formsReducer, initialState)
    const [showError, setShowError] = useState<boolean>(false)

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    useEffect(() => {
        let value: string = localStorage.getItem('token')!;
        let token: string = value.substring(1,value.length-1);
        axios.get('http://localhost:8080/api/player/' + params.id,{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
                setPlayer(response.data);
                setImageBytes(response.data.imageDTO.imageBytes[0]);
                setPlayerSkills(response.data.playerSkills);
                setEnteredName(response.data.playerName);
                setEnteredSalary(response.data.salary)
                dispatch({
                    type: 'INITIALIZE_STATE',
                    payload: {
                        ...initialState,
                        name: { value: response.data.playerName, touched: false, hasError: true, error: "" },
                        salary: { value: response.data.salary, touched: false, hasError: true, error: "" },
                    }
                    })
         })
         .catch(response => {
                alert(response.response.data.message);
            });

    }, []);

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
        toast.success('You have sussessufully edited player!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1000,
            onClose: () => navigateTo(`/sportClubs/playersInfo/${player.id}`)
        });
    };

    const handleSelect=(event: React.MouseEvent , skill: Skill)=>{
        setValue((event.target as HTMLInputElement).value)  //check again
        playerSkills.push(skill)
        setPlayerSkills(playerSkills)
        setAddSkills(false)
    }

    const selectFile = (event: React.FormEvent<HTMLInputElement>) => {
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
            setIsPictureChanged(true)
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

    const addNewSkill = () => {
        setAddSkills(true)   //skills -> all skills
        setDropdonSkills((exclude(skills, playerSkills)));  
    }

    const exclude = (arr1: Skill [], arr2: Skill[]) => {
        return arr1.filter(o1 => arr2.map(o2 => o2.id).indexOf(o1.id) === -1)
    };

    const remove = (event: React.MouseEvent<HTMLElement>, skill:Skill) => {
        event.preventDefault()
        const skills = [...playerSkills]
        const index = skills.indexOf(skill);
        if (index > -1) { // only splice array when item is found
            skills.splice(index, 1); 
        }

        setPlayerSkills(skills)
    }

    const editPlayer = () => {
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
            var data = {}
                if (!isPictureChanged){
                    data = {
                        id: player.id,
                        playerName: enteredName,
                        image: player.image,
                        salary: enteredSalary,
                        playerSkills: playerSkills
                    } 
                }else{
                    data = {
                        id: player.id,
                        playerName: enteredName,
                        image: fileName,
                        salary: enteredSalary,
                        playerSkills: playerSkills
                    }

                }

            let value: string = localStorage.getItem('token')!;
            let token: string = value.substring(1,value.length-1);
            axios.put('http://localhost:8080/api/player', data, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            })
                .then(response => {
                    showToastMessage(); 
                })
                .catch(response => {
                    alert(response.response.data.message);
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
                <CardHeader tag="h5">
                    <MdOutlineSportsKabaddi size={25}/>
                    <span style={{marginLeft:'10px'}}>Player</span>
                </CardHeader>
                <CardBody>
                    {imageBytes ? 
                    <Card style={{width:'100px', height:'100px'}}>
                        <img  alt={'not found'}  style={{width:'100%', objectFit:'cover', height:'100%'}} 
                        src={`data:image/jpg;image/png;base64,${imageBytes}`} 
                        />
                    </Card>
                    : null}
                    <Label for="exampleEmail">Change picture</Label>
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
                    <Label style={{marginTop:'15px'}} for="exampleEmail">Name</Label>
                        <Input
                        type="text"
                        name="name"
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
                        required={true}
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
                    <Label style={{marginTop:'25px'}}>
                        Player skills: 
                    </Label>
                    <div style={{textAlign:'right', marginTop:'-45px'}}>
                        <Button color="success" outline onClick={addNewSkill}>
                            Add new
                        </Button>
                    </div>
                    
                    {addSkills ? 
                    <div>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                        <DropdownToggle caret color="info">{value}</DropdownToggle>
                            <DropdownMenu value={value} >
                                {dropdownSkills.map(skill => 
                                    <DropdownItem key={skill.id} onClick={(e) => handleSelect(e, skill)} value={skill.name}>
                                    {skill.name}
                                    </DropdownItem> 
                                )}
                            </DropdownMenu>
                        </Dropdown> 
                    </div>
                    : 
                    <Card style={{marginTop:'15px'}}>
                    <ListGroup flush>
                    {playerSkills.map(skill => 
                        <ListGroupItem key={skill.id}>
                            <Label>Name: {skill.name}</Label>
                            <div style={{textAlign:'right'}}>
                                <a onClick={(e) => remove(e, skill)}>
                                    <Badge style={{width:'60px', height:'20px', marginTop:'-40px'}} color="danger" pill>
                                        Remove
                                    </Badge>
                                </a>
                            </div>
                        </ListGroupItem> 
                    )}
                    </ListGroup>
                </Card>
                }
                    {showError && !formState.isFormValid && (
                        <div className="form_error">Please fill all the fields correctly</div>
                    )}
                    <div className="button-container-div">
                        <Button  style={{marginTop:'30px', width:'100px'}} color="success" onClick={editPlayer} >Save</Button>
                    </div>
                </CardBody>
            </Card>
            <div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default EditPlayer;