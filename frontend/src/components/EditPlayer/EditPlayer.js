import React, {useState, useEffect, useRef} from 'react'; 
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Label,
    ListGroup,
    ListGroupItem,
    Badge,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
  } from 'reactstrap';
  import axios from 'axios'
  import { useNavigate } from 'react-router-dom';
  import { MdOutlineSportsKabaddi } from 'react-icons/md';
  import {useParams} from 'react-router-dom';
  import { Link } from 'react-router-dom';

const EditPlayer = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredSalary, setEnteredSalary] = useState('');
    const [fileName, setFileName] = useState('');
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [imageBytes, setImageBytes] = useState()
    const [player, setPlayer] = useState('')
    const [playerSkills, setPlayerSkills] = useState([])
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [value,setValue] = useState('Select skill');
    const [skills, setSkills] = useState([])
    const params = useParams();
    const [addSkills, setAddSkills] = useState(false)
    const [dropdownSkills, setDropdonSkills] = useState([])
    const [isRemoved, setIsRemoved] = useState(false)
    const [isPictureChanged, setIsPictureChanged] = useState(false)
    const navigateTo = useNavigate();

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    useEffect(() => {
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
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
         }).catch(res => {
                alert("Error");
                console.log(res);
            });

    }, []);

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

    const handleSelect=(event, skill)=>{
        setValue(event.target.value)
        playerSkills.push(skill)
        setPlayerSkills(playerSkills)
        setAddSkills(false)
    }

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
          setIsPictureChanged(true)
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

    const addNewSkill = () => {
        setAddSkills(true) 
        setDropdonSkills((exclude(skills, playerSkills)));
        
    }

    const exclude = (arr1, arr2) => {
        return arr1.filter(o1 => arr2.map(o2 => o2.id).indexOf(o1.id) === -1)
    };

    const remove = (event, skill) => {
        event.preventDefault()
        const index = playerSkills.indexOf(skill);
        if (index > -1) { // only splice array when item is found
            playerSkills.splice(index, 1); 
        }

        setPlayerSkills(playerSkills)
        setIsRemoved(true)
    }

    const editPlayer = () => {
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

        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.put('http://localhost:8080/api/player', data, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                //showToastMessage(); 
                navigateTo(`/sportClubs/playersInfo/${player.id}`)
            })
            .catch(response => {
                alert("Please enter valid data!");
                console.log(response);
            }); 
    }

    return(
        <div className='Card'>
            <Card style={{
                    width: '40rem'
            }}>
                <CardHeader tag="h5" style={{backgroundColor: '#f1f1f1'}}>
                    <MdOutlineSportsKabaddi size={25}/>
                    <span style={{marginLeft:'10px'}}>Player</span>
                </CardHeader>
                <CardBody>
                    <Card style={{width:'100px', height:'100px'}}>
                        <img style={{width:'100%', objectFit:'cover', height:'100%'}} src={`data:image/jpg;image/png;base64,${imageBytes}`} />
                    </Card>
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
                        type="name"
                        name="name"
                        id="exampleName"
                        placeholder="Name"
                        value={enteredName}
                        onChange={event => {
                            setEnteredName(event.target.value)
                        }}/> 
                    <Label for="exampleEmail">Salary</Label>
                        <Input
                        type="name"
                        name="salary"
                        id="exampleSalary"
                        placeholder="Salary"
                        value={enteredSalary}
                        onChange={event => {
                            setEnteredSalary(event.target.value)
                        }}/> 

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
                                <Link onClick={(e) => remove(e, skill)}>
                                    <Badge style={{width:'60px', height:'20px', marginTop:'-40px'}} color="danger" pill>
                                        Remove
                                    </Badge>
                                </Link>
                            </div>
                        </ListGroupItem> 
                    )}
                    </ListGroup>
                </Card>
                }
                    <div class="button-container-div">
                        <Button style={{marginTop:'30px', width:'100px'}} color="success" onClick={editPlayer} >Save</Button>
                    </div>
                </CardBody>
            </Card>
        </div>

    );
};

export default EditPlayer;