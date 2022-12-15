import React, {useState, useEffect, useRef, useContext} from 'react'; 
import {Card,CardHeader,ListGroup,ListGroupItem,Badge,Button,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineSportsKabaddi } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { BsTrash } from 'react-icons/bs';
import { AuthContext } from '../../context/auth-context';
import Player from '../../model/Player';
import Club from '../../model/Club';
import CardStyle from '../../styled-components/CardStyle';
import ButtonDivStyle from '../../styled-components/ButtonDivStyle';
import BadgeStyle from '../../styled-components/BadgeStyle'

  const ClubPlayers = () => {
    const [clubPlayers, setClubPlayers] = useState<Player []>([]);
    const [club, setClub] = useState<Club>({} as Club)
    const params = useParams();
    let navigate = useNavigate(); 
    const firstTimeRender = useRef<boolean>(true);
    // Modal open state
    const [modal, setModal] = useState(false);
    const [playerId, setPlayerId] = useState<number>();
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.auth()
    },[])

    useEffect(() => {
        let value: string = localStorage.getItem('token')!;
        let token: string = value.substring(1,value.length-1);
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
        let value: string = localStorage.getItem('token')!;
        let token: string = value.substring(1,value.length-1);
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

    // Toggle for Modal
    const toggle = (playerId: number) => {
        setModal(!modal);
        setPlayerId(playerId)
    } 

    const addNewPlayer = () => {
        navigate({
            pathname: `/sportClubs/addNewPlayer/${club.id}`
        });
    }

    const removePlayer = (event: React.MouseEvent<HTMLButtonElement>, playerId: number, clubId: number)  => {
        event.preventDefault()
        let value: string = localStorage.getItem('token')!;
        let token: string = value.substring(1,value.length-1);

        axios.get('http://localhost:8080/api/player/'  + playerId,{ 
            headers: {
               'Authorization': 'Bearer ' + token,
           }
        }).then(response => {
            type Data = {
                clubId: number,
                playerId: number
            }

            const data:Data = {
                clubId: clubId,
                playerId: playerId
            }
    
            let value: string = localStorage.getItem('token')!;
            let token: string = value.substring(1,value.length-1);
            
            axios.post('http://localhost:8080/api/club/removePlayer/', data,{ 
                 headers: {
                    'Authorization': 'Bearer ' + token,
                }
             }).then(response => {
                    window.location.reload();
             }).catch(res => {
                    alert("Error");
                    console.log(res);
                });

        }).catch(res => {
               alert("Error");
               console.log(res);
        })
      };


    useEffect(() => { 
        firstTimeRender.current = false 
      }, [])

    return(
        <CardStyle>
            <Card>
            <CardHeader>
                <MdOutlineSportsKabaddi size={25}/>
                <span>{club.name} players</span>
                {authContext.role === 'EDITOR' ?
                <ButtonDivStyle>
                    <Button color="success" outline onClick={addNewPlayer}>
                        Add
                    </Button>
                </ButtonDivStyle>:null}
            </CardHeader>
            <ListGroup flush>
                {clubPlayers.map(player => 
                    <ListGroupItem> 
                        <Link to={{pathname: `/sportClubs/playersInfo/${player.id}`}}>
                            {player.playerName}
                        </Link>
                        {authContext.role === 'EDITOR' ?
                        <BadgeStyle> 
                            <a onClick={() => toggle(player.id)}>
                                <h6><Badge color="danger" pill className='p-2'>Remove</Badge></h6>
                            </a>
                        </BadgeStyle>:null}
                    </ListGroupItem> 
                )}
            </ListGroup>
            </Card>
            {/* Modal */}
            <div>
            <Modal isOpen={modal}
                toggle={() => toggle}>
                <ModalHeader toggle={() => toggle}>
                <BsTrash></BsTrash>
                    <span>Are you sure?</span>
                </ModalHeader>
                <ModalBody>
                    This player will be removed from club.
                </ModalBody>
                <ModalFooter> 
                    <Button color="danger" onClick={(e) => { toggle(playerId!); removePlayer(e, playerId!, club.id);}} >Okay</Button>
                </ModalFooter>
            </Modal>
            </div>
        </CardStyle>
    );
  };

export default ClubPlayers;