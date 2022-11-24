import React, {useState, useEffect} from 'react'; 
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem
  } from 'reactstrap';
import { FcSportsMode } from 'react-icons/fc';
import axios from 'axios';

const SportClubs = () => {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.get('http://localhost:8080/api/club',{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
                setClubs(response.data);
            alert("Success")
         }).catch(res => {
                alert("Error");
                console.log(res);
            });

    }, []);

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
            </CardHeader>
            <ListGroup flush>
                {clubs.map(club => 
                    <ListGroupItem>{club.name}</ListGroupItem> 
                )}
            </ListGroup>
            </Card>
        </div>
    );

};

export default SportClubs;