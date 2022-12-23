import React, {useState, useEffect, useRef, useContext} from 'react'; 
import {Card,CardHeader,ListGroup,ListGroupItem,Badge,Button,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineSportsKabaddi } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { BsTrash } from 'react-icons/bs';
import Player from '../../model/Player';
import Club from '../../model/Club';
import CardStyle from '../../styled-components/CardStyle';
import ButtonDivStyle from '../../styled-components/ButtonDivStyle';
import BadgeStyle from '../../styled-components/BadgeStyle'
import RemovePlayer from '../../model/RemovePlayer';
import axiosInstance from '../../axios-api/axios_instance';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import useToggleModal from '../../hooks/useToggleModal';

  const ClubPlayers = () => {
    const [clubPlayers, setClubPlayers] = useState<Player[]>([]);
    const [club, setClub] = useState<Club>({} as Club)
    const params = useParams();
    let navigate = useNavigate(); 
    const [toggle, showModal, id] = useToggleModal();
    const user = useSelector((state: RootState) => state.user.user)

    useEffect(() => {
        axiosInstance.get('/player/players/' + params.id).then(response => {
            setClubPlayers(response.data);
        }).catch(res => {
            alert("Error");
            console.log(res);
        });
    }, []);

    useEffect(() => {
        axiosInstance.get('/club/' + params.id).then(response => {
            setClub(response.data);
        }).catch(res => {
            alert("Error");
            console.log(res);
        });
    }, []);

    const addNewPlayer = () => {
        navigate({
            pathname: `/sportClubs/addNewPlayer/${club.id}`
        });
    }

    const removePlayer = (event: React.MouseEvent<HTMLButtonElement>, playerId: number, clubId: number)  => {
        event.preventDefault()
        axiosInstance.get('/player/' + playerId).then(response => {
            const data: RemovePlayer= {
                clubId: clubId,
                playerId: playerId
            }

            axiosInstance.post('/club/removePlayer', data).then(response => {
                window.location.reload();
            }).catch(res => {
                alert("Error");
                console.log(res);
            });

        }).catch(res => {
               alert("Error");
               console.log(res);
        });
      };

    return(
        <CardStyle>
            <Card>
            <CardHeader>
                <MdOutlineSportsKabaddi size={25}/>
                <span>{club.name} players</span>
                {user && user.role === 'ROLE_EDITOR' ?
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
                        {user!.role === 'ROLE_EDITOR' ?
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
            <Modal isOpen={showModal}
                toggle={() => toggle}>
                <ModalHeader toggle={() => toggle}>
                <BsTrash></BsTrash>
                    <span>Are you sure?</span>
                </ModalHeader>
                <ModalBody>
                    This player will be removed from club.
                </ModalBody>
                <ModalFooter> 
                    <Button color="danger" onClick={(e) => { toggle(id!); removePlayer(e, id!, club.id);}} >Okay</Button>
                </ModalFooter>
            </Modal>
            </div>
        </CardStyle>
    );
  };

export default ClubPlayers;