import React, {useState, useEffect} from 'react'; 
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Label
  } from 'reactstrap';
  import axios from 'axios'
  import { useNavigate } from 'react-router-dom';
  import { MdOutlineSportsKabaddi, MdSkipNext } from 'react-icons/md';
  import Multiselect from 'multiselect-react-dropdown';

const Player = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredSalary, setEnteredSalary] = useState('');
    const [fileName, setFileName] = useState('');
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [skills, setSkills] = useState([])
    const [playerSkills, setPlayerSkills] = useState([])
    const navigateTo = useNavigate();

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

    const addPlayer = () => {
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
                //showToastMessage()
                navigateTo('/players')
            })
            .catch(response => {
                alert("Please enter valid data!");
                console.log(response);
            }); 
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
            <Card style={{
                    width: '40rem'
            }}>
                <CardHeader tag="h5" style={{backgroundColor: '#f1f1f1'}}>
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
        </div>
    )

};

export default Player;