import React, {useState, useEffect} from 'react'; 
import {Card,CardHeader,ListGroup,ListGroupItem,Badge,Button} from 'reactstrap';
import { FcSportsMode } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Club from '../../model/Club';
import CardStyle from '../../styled-components/CardStyle';
import ButtonDivStyle from '../../styled-components/ButtonDivStyle';
import BadgeStyle from '../../styled-components/BadgeStyle';
import axiosInstance from '../../axios-api/axios_instance';
import {  useSelector } from 'react-redux';
import {  RootState } from '../../store/store';

const SportClubs = () => {
    const [clubs, setClubs] = useState<Club[]>([]);
    let navigate = useNavigate(); 
    const user = useSelector((state: RootState) => state.user.user)

    useEffect(() => {
        axiosInstance.get('/club').then(response => {
            setClubs(response.data);
        }).catch(res => {
            alert("Error");
            console.log(res);
        });
    }, []);

    const addNewClub = () => {
        let path = `/sportClubs/addNewClub`; 
        navigate(path);
    }

    return(
        <CardStyle>
            <Card>
            <CardHeader>
                <FcSportsMode size={30}/>
                <span>Sport clubs</span>
                {user && user.role === 'ROLE_EDITOR' ?
                <ButtonDivStyle>
                    <Button color="success" outline onClick={addNewClub}>
                        Add
                    </Button>
                </ButtonDivStyle>:null}
            </CardHeader>
            <ListGroup flush>
                {clubs.map(club => 
                    <ListGroupItem key={club.id}>
                        {club.name}
                        <BadgeStyle>
                        {user && user.role === 'ROLE_EDITOR' ?
                            <Link to={{pathname: `/sportClubs/editClub/${club.id}`}}>
                                <Badge color="info" pill >Edit</Badge>
                            </Link> :null}
                            <Link to={{pathname: `/sportClubs/players/${club.id}`}}>
                                <Badge color="info" pill >See players</Badge>
                            </Link>
                        </BadgeStyle>
                    </ListGroupItem> 
                )}
            </ListGroup>
            </Card>
        </CardStyle>
    );

};

export default SportClubs;