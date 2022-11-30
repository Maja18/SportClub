import React, {useState, useEffect} from 'react'; 
import {Card,CardHeader,ListGroup,ListGroupItem,Badge,Button,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 
import { MdOutlineSportsKabaddi } from 'react-icons/md'; 
import { BsTrash } from 'react-icons/bs';

const Players = () => {
    const [players, setPlayers] = useState([]);
    let navigate = useNavigate(); 
    // Modal open state
    const [modal, setModal] = useState(false);
    const [playerId, setPlayerId] = useState();

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

    // Toggle for Modal
    const toggle = (playerId) => {
        setModal(!modal);
        setPlayerId(playerId)
    } 

    const deletePlayer = (event, playerId)  => {
        event.preventDefault()

        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.delete('http://localhost:8080/api/player/' + playerId,{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
                window.location.reload(false);
         }).catch(res => {
                alert("Error");
                console.log(res);
            });
      };
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
                        <Link to={{pathname: `/sportClubs/playersInfo/${player.id}`}}>
                            {player.playerName}
                        </Link>
                        <div className='Buttons'>
                            <Link to={`/editPlayer/${player.id}`}>
                                <Badge style={{width:'60px', height:'20px'}} color="info" pill>Edit</Badge>
                            </Link>
                            <Link onClick={() => toggle(player.id)}>
                                <Badge style={{width:'60px', height:'20px', marginLeft:'10px'}} color="danger" pill>Delete</Badge>
                            </Link>
                        </div>
                    </ListGroupItem> 
                )}
            </ListGroup>
            </Card>
            {/* Modal */}
            <div>
            <Modal isOpen={modal}
                toggle={toggle}>
                <ModalHeader toggle={toggle}>
                <BsTrash></BsTrash>
                    <span style={{marginLeft:'10px'}}>Are you sure?</span>
                </ModalHeader>
                <ModalBody>
                    This player will be deleted.
                </ModalBody>
                <ModalFooter> 
                    <Button color="danger" onClick={(e) => { toggle(); deletePlayer(e, playerId);}} >Okay</Button>
                </ModalFooter>
            </Modal>
            </div>
        </div>
    )

};

export default Players;