import React, {useState, useEffect, useReducer} from 'react'; 
import {Button,Card,CardBody,CardHeader,Input,Label,ListGroup,ListGroupItem,Badge,Dropdown,DropdownToggle,
    DropdownItem,DropdownMenu} from 'reactstrap';
import axios from 'axios'
import { isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { MdOutlineSportsKabaddi } from 'react-icons/md';
import {useParams} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Player from '../../model/Player';
import Skill from '../../model/Skill';
import CardStyle from '../../styled-components/CardStyle';
import BadgeStyle from '../../styled-components/BadgeStyle';
import ButtonContainerDiv from '../../styled-components/ButtonContainerDiv';
import SkillsCardStyle from '../../styled-components/SkillsCardStyle';
import PhotoCardStyle from '../../styled-components/PhotoCardStyle';
import ImageStyle from '../../styled-components/IImageStyle';
import DivButtonStyle from '../../styled-components/DivButtonStyle';
import DivPlayerStyle from '../../styled-components/DivPlayerStyle';
import { useFormik } from 'formik';
import { FormikErrors } from 'formik/dist/types';
import ErrorDiv from '../../styled-components/Error';

interface FormValues {
    name: string;
    salary: string;
  }

const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.name) {
        errors.name = 'Required';
    } 
    else if (!/^[a-zA-Z ]+$/.test(values.name)){
        errors.name = "Invalid last name. Avoid Special characters!"
    }
    if (!values.salary){
        errors.salary = 'Required'
    }
    else if (!/^[+]?\d+([.]\d+)?$/.test(values.salary)){
        errors.salary = "Invalid salary, only numbers are allowed!"
    }
   
    return errors;
  };


const EditPlayer = () => {
    const [fileName, setFileName] = useState('');
    const [selectedFiles, setSelectedFiles] = useState<File | null>(null);
    const [currentFile, setCurrentFile] = useState<File | undefined>(undefined);
    const [imageBytes, setImageBytes] = useState<Int8Array>()
    const [player, setPlayer] = useState<Player>({} as Player)
    const [playerSkills, setPlayerSkills] = useState<Skill[]>([])
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [value,setValue] = useState('Select skill');
    const [skills, setSkills] = useState<Skill[]>([])
    const params = useParams();
    const [addSkills, setAddSkills] = useState(false)
    const [dropdownSkills, setDropdonSkills] = useState<Skill[]>([])
    const [isPictureChanged, setIsPictureChanged] = useState(false)
    const navigateTo = useNavigate();
    const formik = useFormik({
        initialValues: {
          name: player.playerName,
          salary: player.salary,
        },
        enableReinitialize: true,
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    useEffect(() => {
        let value = localStorage.getItem('token')!;
        let token = value.substring(1,value.length-1);
        axios.get('http://localhost:8080/api/player/' + params.id,{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
                setPlayer(response.data);
                setImageBytes(response.data.imageDTO.imageBytes[0]);
                setPlayerSkills(response.data.playerSkills);
         })
         .catch(response => {
                alert(response.response.data.message);
            });

    }, []);

    useEffect(() => {
        let value = localStorage.getItem('token')!;
        let token = value.substring(1,value.length-1);
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

    const handleSelect=(skill: Skill)=>{
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
        let value = localStorage.getItem('token')!;
        let token = value.substring(1,value.length-1);
      
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

    const exclude = (arr1: Skill[], arr2: Skill[]) => {
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
        var editedPlayer: Player;
            if (!isPictureChanged){
                editedPlayer = {
                    id: player.id,
                    playerName: formik.values.name,
                    image: player.image,
                    salary: formik.values.salary,
                    playerSkills: playerSkills
                } 
            }else{
                editedPlayer = {
                    id: player.id,
                    playerName: formik.values.name,
                    image: fileName,
                    salary: formik.values.salary,
                    playerSkills: playerSkills
                }

            }

        let value = localStorage.getItem('token')!;
        let token = value.substring(1,value.length-1);
        axios.put('http://localhost:8080/api/player', editedPlayer, {
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


    return(
        <CardStyle>
            <Card>
                <CardHeader tag="h5">
                    <MdOutlineSportsKabaddi size={25}/>
                    <span>Player</span>
                </CardHeader>
                <CardBody>
                    {imageBytes ? 
                    <PhotoCardStyle>
                        <ImageStyle alt={'not found'} 
                            src={`data:image/jpg;image/png;base64,${imageBytes}`} 
                        />
                    </PhotoCardStyle>
                    : null}
                    <Label for="exampleEmail">Change picture</Label>
                        <Input
                        type="file"
                        name="image" 
                        accept="image/png, image/jpeg"
                        id="file" 
                        onChange={selectFile}
                    />
                    <Button
                        className="btn btn-success"
                        disabled={!selectedFiles}
                        onClick={uploadImage}> Upload
                    </Button>
                    <DivPlayerStyle>
                        <Label>Name</Label>
                            <Input
                            type="text"
                            name="name"
                            id="exampleName"
                            placeholder="Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <ErrorDiv>{formik.errors.name}</ErrorDiv>
                            ) : null}      
                        <Label for="exampleEmail">Salary</Label>
                            <Input
                            type="text"
                            name="salary"
                            id="exampleSalary"
                            placeholder="Salary"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.salary}
                            />
                            {formik.touched.salary && formik.errors.salary ? (
                                <ErrorDiv>{formik.errors.salary}</ErrorDiv>
                            ) : null}
                        <DivPlayerStyle>
                        <Label>
                            Player skills: 
                        </Label>
                        <DivButtonStyle>
                            <Button color="success" outline onClick={addNewSkill}>
                                Add new
                            </Button>
                        </DivButtonStyle>
                        
                        {addSkills ? 
                        <div>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                            <DropdownToggle caret color="info">{value}</DropdownToggle>
                                <DropdownMenu value={value} >
                                    {dropdownSkills.map(skill => 
                                        <DropdownItem key={skill.id} onClick={() => handleSelect(skill)} value={skill.name}>
                                            {skill.name}
                                        </DropdownItem> 
                                    )}
                                </DropdownMenu>
                            </Dropdown> 
                        </div>
                        : 
                        <SkillsCardStyle>
                        <ListGroup flush>
                        {playerSkills.map(skill => 
                            <ListGroupItem key={skill.id}>
                                <Label>Name: {skill.name}</Label>
                                <BadgeStyle>
                                    <a onClick={(e) => remove(e, skill)}>
                                        <h5><Badge color="danger" pill>
                                            Remove
                                        </Badge></h5>
                                    </a>
                                </BadgeStyle>
                            </ListGroupItem> 
                        )}
                        </ListGroup>
                    </SkillsCardStyle>
                        }
                        </DivPlayerStyle>
                    </DivPlayerStyle>
                    <ButtonContainerDiv>
                        <Button disabled={!formik.isValid} color="success" onClick={editPlayer} >Save</Button>
                    </ButtonContainerDiv>
                </CardBody>
            </Card>
            <div>
                <ToastContainer />
            </div>
        </CardStyle>
    );
};

export default EditPlayer;