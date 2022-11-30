import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    CardText,
    Label,
    CardHeader,
    Input
} from 'reactstrap';
import { CgProfile } from 'react-icons/cg';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const location = useLocation();
    const [enteredNewPassword, setEnteredNewPassword] = useState('');
    let navigateTo = useNavigate(); 

    const changePassword = (event) => {
        event.preventDefault()
        const data = {
            userId: location.state.userInfo.id,
            newPassword: enteredNewPassword
        }

        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.post('http://localhost:8080/api/person/change-password', data, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
                .then(response => {
                    //showToastMessage()
                    navigateTo('/login')
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
                <CgProfile size={30}/>
                    <span style={{marginLeft:'10px'}}>Profile Info</span>
                </CardHeader>
                <CardBody>
                    <CardText>
                        <Label>
                            New password: 
                        </Label>
                        <Input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        placeholder="*************"
                        value={enteredNewPassword}
                        onChange={(e) => setEnteredNewPassword(e.target.value)}
                        />
                    </CardText>
                    <div class="button-container-div">
                        <Button color='info' onClick={changePassword} >Save</Button>
                    </div>
                </CardBody>
            </Card>
        </div>

    );
}


export default ChangePassword;