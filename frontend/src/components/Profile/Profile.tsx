import React, {useState, useEffect} from 'react';
import {Button,Card,CardBody,CardText,Label,CardHeader} from 'reactstrap';
import { CgProfile } from 'react-icons/cg';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Person from '../../model/Person';
import CardStyle from '../../styled-components/CardStyle';
import personAxiosInstance from '../../axios-api/person_axios_instance';

const Profile = () => {
    const [user, setUser] = useState<Person>({} as Person);  
    const [userRole, setUserRole] = useState('')
    let navigate = useNavigate(); 

    useEffect(() => {
        personAxiosInstance.get('/').then(response => {
            setUser(response.data)
            setUserRole(response.data.role.substring(5))
         }).catch(res => {
                alert("Error");
                console.log(res);
         })
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
        let path = `/profile/changePassword`; 
        navigate(path, {
            state: {
              userInfo: user
            }
        });
    }

    return(
        <CardStyle>
            <Card>
                <CardHeader tag="h5">
                    <CgProfile size={30}/>
                    <span>Profile Info</span>
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
                    <Button className='button' color='info' onClick={routeChange}>Edit</Button>
                    <Button className='button' color='info' onClick={changePassword}>Change password</Button>
                </CardBody>
            </Card>
        </CardStyle>
    );
};

export default Profile;