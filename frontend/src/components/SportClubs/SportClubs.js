import React, {useState, useEffect} from 'react'; 
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Badge,
    Button
  } from 'reactstrap';
import { FcSportsMode } from 'react-icons/fc';
import axios from 'axios';
import './SportClubs.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SportClubs = () => {
    const [clubs, setClubs] = useState([]);
    let navigate = useNavigate(); 

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
                <div style={{textAlign:'right', marginTop:'-30px'}}>
                    <Button color="success" outline onClick={addNewClub}>
                        Add
                    </Button>
                </div>
            </CardHeader>
            <ListGroup flush>
                {clubs.map(club => 
                    <ListGroupItem>
                        {club.name}
                        <div className='Buttons'>
                            <Link to={{pathname: `/editClub/${club.id}`}}>
                                <Badge style={{width:'60px', height:'20px'}} color="info" pill>Edit</Badge>
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