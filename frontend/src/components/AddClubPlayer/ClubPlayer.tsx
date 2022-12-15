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
import ButtonDivStyle from '../../styled-components/ButtonDivStyle';

const ClubPlayer = () => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [club, setClub] = useState<Club>({} as Club)
    const [players, setPlayers] = useState<Player []>([]);
    const params = useParams();
    const [value,setValue] = useState<string>('Select player');
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

    useEffect(() => {
        let value: string = localStorage.getItem('token')!;
        let token: string = value.substring(1,value.length-1);
        axios.get('http://localhost:8080/api/player/noClubPlayers' ,{ 
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

    const handleSelect=(event: React.MouseEvent, playerId: number)=>{
        setValue((event.target as HTMLInputElement).value)
        let value: string = localStorage.getItem('token')!;
        let token: string = value.substring(1,value.length-1);
       
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
    }

    const addPlayerToClub = () => {
        club.players.push(player)
        let value: string = localStorage.getItem('token')!;
        let token: string = value.substring(1,value.length-1);

        type Data = {
            id: number,
            name: string,
            players: Player []
        }
        
        const data:Data = {
            id: club.id,
            name: club.name,
            players: club.players
        }
        
        axios.post('http://localhost:8080/api/club/newPlayer', data, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
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
                                    <DropdownItem key={player.id} onClick={(e) => handleSelect(e, player.id)} value={player.playerName}>
                                    {player.playerName}
                                    </DropdownItem> 
                                )}
                            </DropdownMenu>
                    </Dropdown>
                    <div className="button-container-div">
                        <Button disabled={!player} color="success" onClick={addPlayerToClub}>Add</Button>
                    </div>
                </CardBody>
            </Card>
            <div>
            <ToastContainer />
            </div>
        </CardStyle>
    );
};

export default ClubPlayer;