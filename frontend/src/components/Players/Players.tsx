import React, {useState, useEffect} from 'react'; 
import {Card,CardHeader,ListGroup,ListGroupItem,Badge,Button,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 
import { MdOutlineSportsKabaddi } from 'react-icons/md'; 
import { BsTrash } from 'react-icons/bs';
import Player from '../../model/Player';
import CardStyle from '../../styled-components/CardStyle';
import ButtonDivStyle from '../../styled-components/ButtonDivStyle';
import BadgeStyle from '../../styled-components/BadgeStyle';
import axiosInstance from '../../axios-api/axios_instance';

const Players = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    let navigate = useNavigate(); 
    // Modal open state
    const [modal, setModal] = useState(false);
    const [playerId, setPlayerId] = useState(0);

    useEffect(() => {
        axiosInstance.get('/player').then(response => {
            setPlayers(response.data);
        }).catch(res => {
            alert("Error");
        });
    }, []);

    // Toggle for Modal
    const toggle = (playerId: number) => {
        setModal(!modal);
        setPlayerId(playerId)
    } 

    const deletePlayer = (event: React.MouseEvent<HTMLButtonElement>, playerId: number)  => {
        event.preventDefault()

        axiosInstance.delete('/player/' + playerId).then(response => {
            window.location.reload();
        }).catch(res => {
            alert("Error");
            console.log(res);
        });
      };

    const addNewPlayer = () => {
        let path = `/players/addNewPlayer`; 
        navigate(path, {
            state: {
                isAddPlayer : true
            }
        });
    }

    return(
        <CardStyle>
            <Card>
            <CardHeader>
            <   MdOutlineSportsKabaddi size={25}/>
                <span>Players</span>
                <ButtonDivStyle>
                    <Button color="success" outline onClick={addNewPlayer} >
                        Add
                    </Button>
                </ButtonDivStyle>
            </CardHeader>
            <ListGroup flush>
                {players.map(player => 
                    <ListGroupItem key={player.id}>
                        <Link className='playerLink' to={{pathname: `/players/playersInfo/${player.id}`}}>
                            {player.playerName}
                        </Link>
                        <BadgeStyle>
                            <Link to={`/editPlayer/${player.id}`} state={{isAddPlayer : false}}>
                                <Badge color="info" pill >Edit</Badge>
                            </Link>
                            <a onClick={() => toggle(player.id)}>
                                <Badge color="danger" pill >Delete</Badge>
                            </a>
                        </BadgeStyle>
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
                    This player will be deleted.
                </ModalBody>
                <ModalFooter> 
                    <Button color="danger" onClick={(e) => { toggle(playerId!); deletePlayer(e, playerId!);}} >Okay</Button> 
                </ModalFooter>
            </Modal>
            </div>
        </CardStyle>
    )
};

export default Players;