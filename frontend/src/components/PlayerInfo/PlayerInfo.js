import React, {useState, useEffect, useRef} from 'react'; 
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {
    Card,
    CardBody,
    CardHeader,
    ListGroupItem,
    Label,
    ListGroup
  } from 'reactstrap';
  import { MdOutlineSportsKabaddi } from 'react-icons/md';

const PlayerInfo = () => {
    const params = useParams();
    const [player, setPlayer] = useState('')
    const [imageBytes, setImageBytes] = useState()
    const [playerSkills, setPlayerSkills] = useState([])
    const firstTimeRender = useRef(true);

    useEffect(() => { 
        firstTimeRender.current = false 
      }, [])

    useEffect(() => {
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.get('http://localhost:8080/api/player/' + params.id,{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
                setPlayer(response.data);
                setImageBytes(response.data.imageDTO.imageBytes[0]);
                setPlayerSkills(response.data.playerSkills)
         }).catch(res => {
                alert("Error");
                console.log(res);
            });

    }, []);


    return(
        <div className='Card'>
            <Card style={{
                    width: '40rem'
            }}>
                <CardHeader tag="h5" style={{backgroundColor: '#f1f1f1'}}>
                <MdOutlineSportsKabaddi size={25}/>
                <span style={{marginLeft:'10px'}}>{player.playerName}</span>
                </CardHeader>
                <CardBody>
                    <Card style={{width:'100px', height:'100px'}}>
                        <img style={{width:'100%', objectFit:'cover', height:'100%'}} src={`data:image/jpg;image/png;base64,${imageBytes}`} />
                    </Card>
                    <Label style={{marginTop:'20px'}}>
                        Salary: {player.salary}
                    </Label>
                    <Label>
                        Player skills: 
                    </Label>
                    <Card>
                        <ListGroup flush>
                        {playerSkills.map(skill => 
                            <ListGroupItem>
                                <Label>Name: {skill.name}</Label>
                                <Label>Description: {skill.description}</Label>
                            </ListGroupItem> 
                        )}
                        </ListGroup>
                    </Card>
                    
                </CardBody>
            </Card>
        </div>
    );
};

export default PlayerInfo;