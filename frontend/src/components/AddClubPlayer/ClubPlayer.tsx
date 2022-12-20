import React, {useState, useEffect} from 'react'; 
import {Card,CardHeader,Button,CardBody,Dropdown,DropdownToggle,DropdownItem,DropdownMenu, DropdownItemProps} from 'reactstrap';
import axios from 'axios';
import { MdOutlineSportsKabaddi } from 'react-icons/md';
import {useParams} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Club from '../../model/Club';
import Player from '../../model/Player';
import CardStyle from '../../styled-components/CardStyle';
import ButtonContainerDiv from '../../styled-components/ButtonContainerDiv';
import axiosInstance from '../../axios-api/axios_instance';

const ClubPlayer = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [club, setClub] = useState<Club>({} as Club)
    const [players, setPlayers] = useState<Player[]>([]);
    const params = useParams();
    const [value,setValue] = useState('Select player');
    const [player, setPlayer] = useState<Player>({} as Player);
    const navigateTo = useNavigate();

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const showToastMessage = () => {
        toast.success('You have sussessufully added player to club!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:2000,
            onClose: () => navigateTo(`/sportClubs/players/${club.id}`)
        });
    };

    useEffect(() => {
        axiosInstance.get('/club/' + params.id).then(response => {
            setClub(response.data);
        }).catch(res => {
            alert("Error");
            console.log(res);
        });
    }, []);

    useEffect(() => {
        axiosInstance.get('/player/noClubPlayers').then(response => {
            setPlayers(response.data);
        }).catch(res => {
            alert("Error");
            console.log(res);
        });
    }, []);

    const handleSelect=( playerId: number)=>{
        axiosInstance.get('/player/' + playerId).then(response => {
            setPlayer(response.data)
        }).catch(res => {
            alert("Error");
            console.log(res);
        });
    }

    const addPlayerToClub = () => {
        club.players.push(player)

        const clubData: Club = {
            id: club.id,
            name: club.name,
            players: club.players
        }

        axiosInstance.post('/club/newPlayer', clubData).then(response => {
            showToastMessage()
        })
        .catch(response => {
            alert("Please enter valid data!");
            console.log(response);
        });
    }

    return(
        <CardStyle>
            <Card>
                <CardHeader>
                    <MdOutlineSportsKabaddi size={25}/>
                    <span> {club.name}</span>
                </CardHeader>
                <CardBody>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                        <DropdownToggle caret color="info">{value}</DropdownToggle>
                            <DropdownMenu value={value} >
                                {players.map(player => 
                                    <DropdownItem key={player.id} onClick={(e) => handleSelect(player.id)} value={player.playerName}>
                                    {player.playerName}
                                    </DropdownItem> 
                                )}
                            </DropdownMenu>
                    </Dropdown>
                    <ButtonContainerDiv>
                        <Button disabled={!player} color="success" onClick={addPlayerToClub}>Add</Button>
                    </ButtonContainerDiv>
                </CardBody>
            </Card>
            <div>
            <ToastContainer />
            </div>
        </CardStyle>
    );
};

export default ClubPlayer;