import React, {useState, useEffect, useContext} from 'react'; 
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Card,CardBody,CardHeader,ListGroupItem,Label,ListGroup,Button} from 'reactstrap';
import { MdOutlineSportsKabaddi } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/auth-context';
import Player from '../../model/Player';
import Skill from '../../model/Skill';
import CardStyle from '../../styled-components/CardStyle';
import ButtonDivStyle from '../../styled-components/ButtonDivStyle';
import PhotoCardStyle from '../../styled-components/PhotoCardStyle';
import ImageStyle from '../../styled-components/IImageStyle';
import DivPlayerStyle from '../../styled-components/DivPlayerStyle';
import axiosInstance from '../../axios-api/axios_instance';

const PlayerInfo = () => {
    const params = useParams();
    const [player, setPlayer] = useState<Player>({} as Player)
    const [imageBytes, setImageBytes] = useState<Int8Array>()
    const [playerSkills, setPlayerSkills] = useState<Skill[]>([])
    let navigate = useNavigate(); 
    const authContext = useContext(AuthContext);
    
    useEffect(() => {
        authContext.auth()
    },[])

    useEffect(() => {
        axiosInstance.get('/player/' + params.id)
        .then(response => {
            setPlayer(response.data);
            setImageBytes(response.data.imageDTO.imageBytes[0]);
            setPlayerSkills(response.data.playerSkills)
        }).catch(res => {
            alert("Error");
            console.log(res);
        });
    }, []);

    const editPlayer = () => {
        let path = `/editPlayer/${player.id}`; 
        navigate(path);
    }

    return(
        <CardStyle>
            <Card>
                <CardHeader tag="h5">
                    <MdOutlineSportsKabaddi size={25}/>
                    <span>{player.playerName}</span>
                    {authContext.role === 'EDITOR' ?
                    <ButtonDivStyle>
                        <Button color="success" outline onClick={editPlayer}  >
                            Edit
                        </Button>
                    </ButtonDivStyle>:null}
                </CardHeader>
                <CardBody>
                    {imageBytes ? 
                    <PhotoCardStyle>
                        <ImageStyle alt={'not found'}  
                        src={`data:image/jpg;image/png;base64,${imageBytes}`} 
                        />
                    </PhotoCardStyle>
                    : null}
                    <DivPlayerStyle>
                    <Label>
                        Salary: {player.salary}
                    </Label>
                    <Label>
                        Player skills: 
                    </Label>
                    <Card>
                        <ListGroup flush>
                        {playerSkills.map(skill => 
                            <ListGroupItem key={skill.id}>
                                <Label>Name: {skill.name}</Label>
                                <Label>Description: {skill.description}</Label>
                            </ListGroupItem> 
                        )}
                        </ListGroup>
                    </Card>  
                </DivPlayerStyle>         
                </CardBody>
            </Card>
        </CardStyle>
    );
};

export default PlayerInfo;