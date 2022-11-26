import React, {useState, useEffect, useCallback, useRef} from 'react'; 
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
  import { useNavigate } from "react-router-dom";

  const ClubPlayers = () => {
    const [clubPlayers, setClubPlayers] = useState([]);
    const [club, setClub] = useState('')
    const params = useParams();
    let navigate = useNavigate(); 
    const [player, setPlayer] = useState();
    const firstTimeRender = useRef(true);
    const [playersOfClub,setPlayersOfClub] = useState([])

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

    const addNewPlayer = (id) => {
        navigate({
            pathname: `/sportClubs/addNewPlayer/${club.id}`
        });
    }

    const removePlayer = (event, playerId)  => {
        event.preventDefault()
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);

        axios.get('http://localhost:8080/api/player/'  + playerId,{ 
            headers: {
               'Authorization': 'Bearer ' + token,
           }
        }).then(response => {
               setPlayer(response.data)
        }).catch(res => {
               alert("Error");
               console.log(res);
        })
      };

    useEffect(() => {
        if (!firstTimeRender.current) {
            let players = []
            //club.players = club.players.filter(p => p !== player)
            club.players.forEach(p => {
                if (player.id != p.id){
                    players.push(p)
                }
            });
            setPlayersOfClub([...players])
          }
    }, [player]);

    useEffect(() => { 
        if (!firstTimeRender.current) {
            const data = {
                id: club.id,
                name: club.name,
                players: playersOfClub
            }
    
            let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
            
            axios.post('http://localhost:8080/api/club/removePlayer/', data,{ 
                 headers: {
                    'Authorization': 'Bearer ' + token,
                }
             }).then(response => {
                    window.location.reload(false);
             }).catch(res => {
                    alert("Error");
                    console.log(res);
                });
        }
      }, [playersOfClub])

    useEffect(() => { 
        firstTimeRender.current = false 
      }, [])

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
                    <Button color="success" outline onClick={addNewPlayer}>
                        Add
                    </Button>
                </div>
            </CardHeader>
            <ListGroup flush>
                {clubPlayers.map(player => 
                    <ListGroupItem>
                        {player.playerName}
                        <div className='Buttons'>
                            <Link onClick={(e) => removePlayer(e, player.id)}>
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