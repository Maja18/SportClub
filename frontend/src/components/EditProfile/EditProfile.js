import React, {useState} from 'react';
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
import './EditProfile.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const location = useLocation();
    const [enteredName, setEnteredName] = useState(location.state.userInfo.firstName);
    const [enteredLastName, setEnteredLastName] = useState(location.state.userInfo.lastName);
    const [enteredEmail, setEnteredEmail] = useState(location.state.userInfo.email);
    const [enteredPassword, setEnteredPassword] = useState(location.state.userInfo.password);
    const [enteredRole, setEnteredRole] = useState(location.state.userInfo.role);
    const [currentEmail, setCurrentEmail] = useState(location.state.userInfo.email);
    const [currentPassword, setCurrentPassword] = useState(location.state.userInfo.password);
    let navigateTo = useNavigate(); 

    const onSubmit = (event) => {
        event.preventDefault();

        const data = {
            id: location.state.userInfo.id,
            firstName: enteredName,
            lastName: enteredLastName,
            email: enteredEmail,
            password: enteredPassword,
            role: enteredRole
        }

        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.put('http://localhost:8080/api/person', data, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
                .then(response => {
                    //showToastMessage()
                    alert("OK")
                    if (currentEmail !== enteredEmail || currentPassword !== enteredPassword){
                        navigateTo('/login')
                    }
                    else{
                        navigateTo('/profile')
                    }
                })
                .catch(response => {
                    alert("Please enter valid data!");
                    console.log(response);
                });   
    };

    const handleEmailChange = (name, value) => {
        setCurrentEmail((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handlePasswordChange = (name, value) => {
        setCurrentEmail((prev) => {
            return { ...prev, [name]: value };
        });
    };

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
                            Name: 
                        </Label>
                        <Input
                        type="name"
                        name="firstName"
                        id="exampleName"
                        placeholder="Name"
                        value={enteredName}
                        onChange={event => {
                            setEnteredName(event.target.value)
                        }}
                        />
                        <Label>
                            Last name: 
                        </Label>
                        <Input
                        type="name"
                        name="lastName"
                        id="exampleLastName"
                        placeholder="Last name"
                        value={enteredLastName}
                        onChange={event => {
                            setEnteredLastName(event.target.value)
                        }}
                        />
                        <Label>
                            Email: 
                        </Label>
                        <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="example@example.com"
                        value={enteredEmail}
                        onChange={event => {
                            setEnteredEmail(event.target.value)
                            handleEmailChange("email", event.target.value)
                        }}
                        />
                        <Label>
                            Password: 
                        </Label>
                        <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                        value={enteredPassword}
                        onChange={event => {
                            setEnteredPassword(event.target.value)
                            handlePasswordChange("password", event.target.value)
                        }}
                        />
                        <Label>
                            Role: 
                        </Label>
                        <div className='div'>
                        <input 
                        type="radio" 
                        value="EDITOR" 
                        name="role" 
                        checked={enteredRole === "EDITOR"}
                        onChange={event => {
                            setEnteredRole(event.target.value)
                        }}
                        />
                        <label class="label">EDITOR</label>
                        <input 
                        class="roleInput" 
                        type="radio" 
                        value="VIEWER" 
                        name="role" 
                        checked={enteredRole === "VIEWER"}
                        onChange={event => {
                            setEnteredRole(event.target.value)
                        }}
                        /> 
                        <label class="label">VIEWER</label>
                        </div>
                    </CardText>
                    <Button color='info' onClick={onSubmit}>Save</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default EditProfile;