import React, {useState} from 'react'; 
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
  import { MdOutlineSportsKabaddi } from 'react-icons/md';

const Player = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredSalary, setEnteredSalary] = useState('');
    const navigateTo = useNavigate();

    const addPlayer = () => {
        const data = {
            playerName: enteredName,
            salary: enteredSalary
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
                    <div class="button-container-div">
                        <Button style={{marginTop:'30px', width:'100px'}} color="success" onClick={addPlayer} >Add</Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )

};

export default Player;