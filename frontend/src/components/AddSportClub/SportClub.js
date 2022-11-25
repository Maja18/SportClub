import React, {useState} from 'react'; 
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Label
  } from 'reactstrap';
import { FcSportsMode } from 'react-icons/fc';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const SportClub = () => {
    const [enteredName, setEnteredName] = useState('');
    const navigateTo = useNavigate();

    const showToastMessage = () => {
        toast.success('You have sussessufully added new club!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const addClub = () => {
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
                navigateTo('/sportClubs')
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
                <FcSportsMode size={30}/>
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