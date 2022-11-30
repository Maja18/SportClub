import React, {useState, useEffect, useContext} from 'react'; 
import {Card,CardHeader,ListGroup,ListGroupItem,Badge,Button} from 'reactstrap';
import { FcSportsMode } from 'react-icons/fc';
import axios from 'axios';
import './SportClubs.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/auth-context';

const SportClubs = () => {
    const [clubs, setClubs] = useState([]);
    let navigate = useNavigate(); 
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.auth()
    },[])

    useEffect(() => {
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.get('http://localhost:8080/api/club',{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
                setClubs(response.data);
         }).catch(res => {
                alert("Error");
                console.log(res);
            });

    }, []);

    const addNewClub = () => {
        let path = `/addNewClub`; 
        navigate(path);
    }

    return(
        <div className='Card'>
            <Card
            style={{
                width: '40rem'
            }}
            >
            <CardHeader>
            <FcSportsMode size={30}/>
                <span style={{marginLeft:'10px'}}>Sport clubs</span>
                {authContext.role === 'EDITOR' ?
                <div style={{textAlign:'right', marginTop:'-30px'}}>
                    <Button color="success" outline onClick={addNewClub}>
                        Add
                    </Button>
                </div>:null}
            </CardHeader>
            <ListGroup flush>
                {clubs.map(club => 
                    <ListGroupItem>
                        {club.name}
                        <div className='Buttons'>
                        {authContext.role === 'EDITOR' ?
                            <Link to={{pathname: `/editClub/${club.id}`}}>
                                <Badge style={{width:'80px', height:'20px'}} color="info" pill>Edit</Badge>
                            </Link> :null}
                            <Link to={{pathname: `/sportClubs/players/${club.id}`}}>
                                <Badge style={{width:'80px', height:'20px', marginLeft:'10px'}} color="info" pill>See players</Badge>
                            </Link>
                        </div>
                    </ListGroupItem> 
                )}
            </ListGroup>
            </Card>
        </div>
    );

};

export default SportClubs;