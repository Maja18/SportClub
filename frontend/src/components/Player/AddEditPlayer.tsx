import React, {useState, useEffect} from 'react'; 
import { useLocation, useNavigate, useParams } from 'react-router';
import Player from '../../model/Player';
import Skill from '../../model/Skill';
import {Button,Card,CardBody,CardHeader,Input,Label,ListGroup,ListGroupItem,Badge,Dropdown,DropdownToggle,
    DropdownItem,DropdownMenu} from 'reactstrap';
import CardStyle from '../../styled-components/CardStyle';
import BadgeStyle from '../../styled-components/BadgeStyle';
import ButtonContainerDiv from '../../styled-components/ButtonContainerDiv';
import SkillsCardStyle from '../../styled-components/SkillsCardStyle';
import PhotoCardStyle from '../../styled-components/PhotoCardStyle';
import ImageStyle from '../../styled-components/IImageStyle';
import DivButtonStyle from '../../styled-components/DivButtonStyle';
import DivPlayerStyle from '../../styled-components/DivPlayerStyle';
import ErrorDiv from '../../styled-components/Error';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '../../axios-api/axios_instance';
import { ToastContainer } from 'react-toastify';
import { MdOutlineSportsKabaddi } from 'react-icons/md';
import DropdownStyle from '../../styled-components/DropDownStyle';
import Multiselect from 'multiselect-react-dropdown';
import { showToastMessage } from '../../toasts/ToastMessage';
import useUpload from '../../hooks/useUpload';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import {addNewPlayer} from '../../slices/playersSlice'

const AddEditPlayer = () => {
    const [imageBytes, setImageBytes] = useState<Int8Array>()
    const [player, setPlayer] = useState<Player>({id: 0, playerName: '', salary:'', playerSkills:[], image:''})
    const [playerSkills, setPlayerSkills] = useState<Skill[]>([])
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [value,setValue] = useState('Select skill');
    const [skills, setSkills] = useState<Skill[]>([])
    const params = useParams();
    const [addSkills, setAddSkills] = useState(false)
    const [dropdownSkills, setDropdonSkills] = useState<Skill[]>([])
    const navigate = useNavigate();
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const location = useLocation();
    const [isAddPlayer, setIsAddPlayer] = useState(location.state.isAddPlayer)
    const {fileName, isPictureChanged, selectedFiles, selectFile, uploadImage} = useUpload('/player/saveImage')
    const dispatch = useDispatch<AppDispatch>()

    const playerSchema = () => {
       return Yup.object().shape({
            name: Yup.string().matches(/^[a-zA-Z ]+$/, 'Invalid Name. Avoid Special characters!').required('Name is required!'),
            salary: Yup.string().matches(/^[+]?\d+([.]\d+)?$/, 'Invalid salary!').required('Salary is required!')
       })
    }

    useEffect(() => {
        if (!isAddPlayer){
            axiosInstance.get('/player/' + params.id).then(response => {
                setPlayer(response.data);
                setImageBytes(response.data.imageDTO.imageBytes[0]);
                setPlayerSkills(response.data.playerSkills);
            })
            .catch(response => {
                alert(response.response.data.message);
            });
        }
    }, []);

    useEffect(() => {
        axiosInstance.get('/skill').then(response => {
            setSkills(response.data)
        }).catch(res => {
            alert("Error");
            console.log(res);
        });   
    }, []);

    const remove = (event: React.MouseEvent<HTMLElement>, skill:Skill) => {
        event.preventDefault()
        const skills = [...playerSkills]
        const index = skills.indexOf(skill);
        if (index > -1) { // only splice array when item is found
            skills.splice(index, 1); 
        }

        setPlayerSkills(skills)
    }

    const handleSelect=(skill: Skill)=>{
        playerSkills.push(skill)
        setPlayerSkills(playerSkills)
        setAddSkills(false)
    }

    const addNewSkill = () => {
        setAddSkills(true)   //skills -> all skills
        setDropdonSkills((exclude(skills, playerSkills)));  
    }

    const exclude = (allSkills: Skill[], playerSkills: Skill[]) => {
        //some -> da li neki od el prolazi zadati uslov u fji
        return allSkills.filter(s => !playerSkills.some(skill => s.id === skill.id));
    };

    const editPlayer = (values: any) => {
        var editedPlayer: Player;
            if (!isPictureChanged){
                editedPlayer = {
                    id: player.id,
                    playerName: values.name,
                    image: player.image,
                    salary: values.salary,
                    playerSkills: playerSkills
                } 
            }else{
                editedPlayer = {
                    id: player.id,
                    playerName: values.name,
                    image: fileName,
                    salary: values.salary,
                    playerSkills: playerSkills
                }
            }

            axiosInstance.put('/player', editedPlayer).then(response => {
             showToastMessage('You have sussessufully edited player!')
             setTimeout(() => {
                navigate(`/sportClubs/playersInfo/${player.id}`)
            }, 3000);   
        })
        .catch(response => {
            alert(response.response.data.message);
        });
    }

    const addPlayer = (values: any) => {
        const newPlayer: Player = {
            id: 0,
            playerName: values.name,
            salary: values.salary,
            image: fileName,
            playerSkills: playerSkills
        }

        dispatch(addNewPlayer(newPlayer)).unwrap().then(() => {
            showToastMessage('You have sussessufully added new player')
            setTimeout(() => {
                navigate('/players')
            }, 3000);
        })    
    };

    const onSelect = (skills: Skill[]) => {
        setPlayerSkills(skills)
    }
    
    return(
        <CardStyle>
            <Card>
            <Formik
                initialValues={{
                    name: player.playerName,
                    salary: player.salary,
                }}
                enableReinitialize 
                validationSchema={playerSchema}
                onSubmit={values => {
                    if (isAddPlayer){
                        addPlayer(values)
                    }else{
                        editPlayer(values)
                    }
                }}
                >
                {({ errors, touched, values, handleSubmit }) => (
                    <div>
                        <CardHeader tag="h5">
                            <MdOutlineSportsKabaddi size={25}/>
                            <span>Player</span>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                {imageBytes ? 
                                <PhotoCardStyle>
                                    <ImageStyle alt={'not found'} 
                                        src={`data:image/jpg;image/png;base64,${imageBytes}`} 
                                    />
                                </PhotoCardStyle>
                                : null}
                                {!isAddPlayer ? 
                                    <Label for="exampleEmail">Change picture</Label> 
                                : null}
                                <DivPlayerStyle>
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
                                            tag={Field}
                                            type="text"
                                            name="name"
                                            id="exampleName"
                                            placeholder="Name"
                                            value = {values.name}
                                            />
                                            {errors.name && touched.name ? (
                                                <ErrorDiv>{errors.name}</ErrorDiv>
                                            ) : null}      
                                        <Label for="exampleEmail">Salary</Label>
                                            <Input
                                            tag={Field}
                                            type="text"
                                            name="salary"
                                            id="exampleSalary"
                                            placeholder="Salary"
                                            value={values.salary}
                                            />
                                            {errors.salary && touched.salary ? (
                                                <ErrorDiv>{errors.salary}</ErrorDiv>
                                            ) : null}
                                    </DivPlayerStyle>
                                    {isAddPlayer ?
                                        <DropdownStyle>   
                                            <Multiselect
                                            placeholder='Select skills'
                                            options={skills} 
                                            onSelect={(skills) => onSelect(skills)} 
                                            displayValue="name"
                                            />
                                        </DropdownStyle>
                                        : 
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
                                        </DivPlayerStyle>} 
                                    <ButtonContainerDiv>
                                        {isAddPlayer ? <Button type="submit" onClick={() => handleSubmit}  color="success">Add</Button> : <Button type="submit" onClick={() => handleSubmit} color="success" >Save</Button>}   
                                    </ButtonContainerDiv>
                                </DivPlayerStyle>
                            </Form>
                        </CardBody>
                    </div>
                )}              
                </Formik>
            </Card>
            <div>
                <ToastContainer />
            </div>
        </CardStyle>
    );
}

export default AddEditPlayer;