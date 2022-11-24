import React, {useState, useEffect} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardText,
    Label,
    CardHeader
  } from 'reactstrap';
import './Profile.css';
import { CgProfile } from 'react-icons/cg';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState([]);
    let navigate = useNavigate(); 

    useEffect(() => {
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.get('http://localhost:8080/api/person',{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
            setUser({
                id: response.data.id,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                password: response.data.password,
                role: response.data.role
            })

            alert("Success")
         }).catch(res => {
                alert("Error");
                console.log(res);
            });

    }, []);

    const routeChange = () =>{ 
        let path = `/editProfile`; 
        navigate(path, {
            state: {
              userInfo: user
            }
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
                            Name: {user.firstName}
                        </Label>
                        <Label>
                            Last name: {user.lastName}
                        </Label>
                        <Label>
                            Email: {user.email}
                        </Label>
                        <Label>
                            Password: {user.password}
                        </Label>
                        <Label>
                            Role: {user.role}
                        </Label>
                    </CardText>
                    <Button color='info' onClick={routeChange}>Edit</Button>
                </CardBody>
            </Card>
        </div>
    );

};

export default Profile;