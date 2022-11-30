import React , {useContext, useEffect} from 'react';
import image from '../../assets/background.png'
import './Home.css'
import { AuthContext } from '../../context/auth-context';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.auth()
    },[])

    return(
        <div className='Div'>
            <h1>Welcome to Sport Clubs</h1>
            <img src={image} alt={'not found'}/>
        </div>
    );
};

export default Home;