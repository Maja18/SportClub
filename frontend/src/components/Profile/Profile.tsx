import React, {useEffect} from 'react';
import {Button,Card,CardBody,CardText,Label,CardHeader} from 'reactstrap';
import { CgProfile } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";
import CardStyle from '../../styled-components/CardStyle';
import { getLoggedUser } from '../../slices/userSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const Profile = () => {
    let navigate = useNavigate(); 
    const user = useAppSelector((state) => state.user.user)
    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(getLoggedUser())
    }, [])

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
                            Name: { user && user.firstName}
                        </Label>
                        <Label>
                            Last name: {user && user.lastName}
                        </Label>
                        <Label>
                            Email: {user && user.email}
                        </Label>
                        <Label>
                            Role: {user && user.role.substring(5)}
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