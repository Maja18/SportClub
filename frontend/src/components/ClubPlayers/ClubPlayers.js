import React, {useState, useEffect} from 'react'; 
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Badge,
    Button
  } from 'reactstrap';
  import {useParams} from 'react-router-dom';
  import axios from 'axios';
  import { Link } from 'react-router-dom';
  import { MdOutlineSportsKabaddi } from 'react-icons/md';

  const ClubPlayers = () => {
    const [clubPlayers, setClubPlayers] = useState([]);
    const [club, setClub] = useState('')
    const params = useParams();

    useEffect(() => {
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.get('http://localhost:8080/api/player/players/' + params.id,{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
                setClubPlayers(response.data);
         }).catch(res => {
                alert("Error");
                console.log(res);
            });

    }, []);

    useEffect(() => {
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.get('http://localhost:8080/api/club/' + params.id,{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
                setClub(response.data);
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
            <MdOutlineSportsKabaddi size={25}/>
                <span style={{marginLeft:'10px'}}>{club.name} players</span>
                <div style={{textAlign:'right', marginTop:'-30px'}}>
                    <Button color="success" outline >
                        Add
                    </Button>
                </div>
            </CardHeader>
            <ListGroup flush>
                {clubPlayers.map(player => 
                    <ListGroupItem>
                        {player.playerName}
                        <div className='Buttons'>
                            <Link >
                                <Badge style={{width:'60px', height:'20px'}} color="danger" pill>Remove</Badge>
                            </Link>
                        </div>
                    </ListGroupItem> 
                )}
            </ListGroup>
            </Card>
        </div>

    );
  };

export default ClubPlayers;