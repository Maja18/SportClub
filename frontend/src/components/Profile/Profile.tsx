import React, {useState, useEffect} from 'react';
import {Button,Card,CardBody,CardText,Label,CardHeader} from 'reactstrap';
import { CgProfile } from 'react-icons/cg';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Person from '../../model/Person';

const Profile = () => {
    const [user, setUser] = useState<Person>({} as Person);  //if a state is initialized soon after setup and always has a value after
    const [userRole, setUserRole] = useState('')
    let navigate = useNavigate(); 

    useEffect(() => {
        let value: string = localStorage.getItem('token')!;
        let token: string = value.substring(1,value.length-1);
        axios.get('http://localhost:8080/api/person',{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
            setUser(response.data)
            setUserRole(response.data.role.substring(5))
         }).catch(res => {
                alert("Error");
                console.log(res);
            });

    }, []);

    const routeChange = () =>{ 
        let path = `/profile/editProfile`; 
        navigate(path, {
            state: {
              userInfo: user
            }
        });
    }

    const changePassword = () =>{ 
        let path = `/changePassword`; 
        navigate(path, {
            state: {
              userInfo: user
            }
        });
    }

    return(
        <div className='Card'>
            <Card>
                <CardHeader tag="h5">
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
                            Role: {userRole}
                        </Label>
                    </CardText>
                    <Button style={{width:'160px'}} color='info' onClick={routeChange}>Edit</Button>
                    <Button style={{width:'160px'}} color='info' onClick={changePassword}>Change password</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Profile;