import React, {useState, useEffect} from 'react'; 
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Badge,
    Button
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 
import { MdOutlineSportsKabaddi } from 'react-icons/md';

const Players = () => {
    const [players, setPlayers] = useState([]);
    let navigate = useNavigate(); 

    useEffect(() => {
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.get('http://localhost:8080/api/player',{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
                setPlayers(response.data);
         }).catch(res => {
                alert("Error");
                console.log(res);
            });

    }, []);

    const addNewPlayer = () => {
        let path = `/addNewPlayer`; 
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
            <MdOutlineSportsKabaddi size={25}/>
                <span style={{marginLeft:'10px'}}>Players</span>
                <div style={{textAlign:'right', marginTop:'-30px'}}>
                    <Button color="success" outline onClick={addNewPlayer} >
                        Add
                    </Button>
                </div>
            </CardHeader>
            <ListGroup flush>
                {players.map(player => 
                    <ListGroupItem>
                        {player.playerName}
                        <div className='Buttons'>
                            <Link>
                                <Badge style={{width:'60px', height:'20px'}} color="info" pill>Edit</Badge>
                            </Link>
                            <Link>
                                <Badge style={{width:'60px', height:'20px', marginLeft:'10px'}} color="danger" pill>Delete</Badge>
                            </Link>
                        </div>
                    </ListGroupItem> 
                )}
            </ListGroup>
            </Card>
        </div>
    )

};

export default Players;