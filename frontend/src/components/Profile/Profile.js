import React, {useState, useEffect} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Label,
    CardHeader
  } from 'reactstrap';
import './Profile.css';
import { CgProfile } from 'react-icons/cg';
import axios from 'axios';

const Profile = () => {
    useEffect(() => {
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.get('http://localhost:8080/api/person',{ 
             headers: {
                 'Authorization': 'Bearer ' + token,
             }
         }).then(response => {
               alert("Success")
         }).catch(res => {
                    alert("Error");
                    console.log(res);
                });

    }, []);

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
                        <Label>
                            Last name:
                        </Label>
                        <Label>
                            Email:
                        </Label>
                        <Label>
                            Password:
                        </Label>
                        <Label>
                            Role:
                        </Label>
                    </CardText>
                    <Button color='info'>Edit</Button>
                </CardBody>
            </Card>
        </div>
    );

};

export default Profile;