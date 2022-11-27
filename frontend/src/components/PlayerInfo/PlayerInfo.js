import React, {useState, useEffect} from 'react'; 
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Label
  } from 'reactstrap';
  import { MdOutlineSportsKabaddi } from 'react-icons/md';

const PlayerInfo = () => {
    const params = useParams();
    const [player, setPlayer] = useState('')

    useEffect(() => {
        let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.get('http://localhost:8080/api/player/' + params.id,{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
                setPlayer(response.data);
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
                    
                    
                </CardBody>
            </Card>
        </div>
    );
};

export default PlayerInfo;