import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    CardText,
    Label,
    CardHeader,
    Input
} from 'reactstrap';
import { FcSportsMode } from 'react-icons/fc';
import { useNavigate } from "react-router-dom";

const EditClub = () => {
    const [club, setClub] = useState([]);
    const [enteredName, setEnteredName] = useState('');
    const params = useParams();
    let navigateTo = useNavigate();
    
    useEffect(() => {
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.get('http://localhost:8080/api/club/' + params.id,{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
            setClub({
                id: response.data.id,
                name: response.data.name
            })
            setEnteredName(response.data.name)
         }).catch(res => {
                alert("Error");
                console.log(res);
            });

    }, []);

    const editClub = () => {
        const data = {
            id: club.id,
            name: enteredName
        }

        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.put('http://localhost:8080/api/club', data, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                //showToastMessage()
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
                    <span style={{marginLeft:'10px'}}>Sport Club</span>
                </CardHeader>
                <CardBody>
                    <CardText>
                        <Label>
                            Name:  
                        </Label>
                        <Input
                        type="name"
                        name="name"
                        id="exampleName"
                        placeholder="Name"
                        value={enteredName}
                        onChange={event => {
                            setEnteredName(event.target.value)
                        }}
                        />
                    </CardText>
                    <div class="button-container-div">
                        <Button style={{marginTop:'30px', width:'100px'}} color="success" onClick={editClub} >Edit</Button>
                    </div>
                </CardBody>
            </Card>
        </div>

    );

};

export default EditClub;