import React, {useState, useEffect} from 'react'; 
import {Card,CardHeader,ListGroup,ListGroupItem,Badge,Button,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 
import { MdOutlineSportsKabaddi } from 'react-icons/md'; 
import { BsTrash } from 'react-icons/bs';
import Player from '../../model/Player';

const Players = () => {
    const [players, setPlayers] = useState<Player []>([]);
    let navigate = useNavigate(); 
    // Modal open state
    const [modal, setModal] = useState(false);
    const [playerId, setPlayerId] = useState<number>();

    useEffect(() => {
        let value: string = localStorage.getItem('token')!;
        let token: string = value.substring(1,value.length-1);
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

    // Toggle for Modal
    const toggle = (playerId: number) => {
        setModal(!modal);
        setPlayerId(playerId)
    } 

    const deletePlayer = (event: React.MouseEvent<HTMLButtonElement>, playerId: number)  => {
        event.preventDefault()

        let value: string = localStorage.getItem('token')!;
        let token: string = value.substring(1,value.length-1);
        axios.delete('http://localhost:8080/api/player/' + playerId,{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
                window.location.reload();
         }).catch(res => {
                alert("Error");
                console.log(res);
            });
      };

    const addNewPlayer = () => {
        let path = `/players/addNewPlayer`; 
        navigate(path);
    }

    return(
        <div className='Card'>
            <Card>
            <CardHeader>
            <   MdOutlineSportsKabaddi size={25}/>
                <span style={{marginLeft:'10px'}}>Players</span>
                <div style={{textAlign:'right', marginTop:'-30px'}}>
                    <Button color="success" outline onClick={addNewPlayer} >
                        Add
                    </Button>
                </div>
            </CardHeader>
            <ListGroup flush>
                {players.map(player => 
                    <ListGroupItem key={player.id}>
                        <Link className='playerLink' to={{pathname: `/players/playersInfo/${player.id}`}}>
                            {player.playerName}
                        </Link>
                        <div className='Buttons'>
                            <Link to={`/editPlayer/${player.id}`}>
                                <Badge style={{width:'60px', height:'20px'}} color="info" pill>Edit</Badge>
                            </Link>
                            <a onClick={() => toggle(player.id)}>
                                <Badge style={{width:'60px', height:'20px', marginLeft:'10px'}} color="danger" pill>Delete</Badge>
                            </a>
                        </div>
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
                    <span style={{marginLeft:'10px'}}>Are you sure?</span>
                </ModalHeader>
                <ModalBody>
                    This player will be deleted.
                </ModalBody>
                <ModalFooter> 
                    <Button color="danger" onClick={(e) => { toggle(playerId!); deletePlayer(e, playerId!);}} >Okay</Button> 
                </ModalFooter>
            </Modal>
            </div>
        </div>
    )
};

export default Players;