import React , {useContext, useEffect} from 'react';
import image from '../../assets/background.png'
import { AuthContext } from '../../context/auth-context';
import styled from 'styled-components';
import useAuthContextHook from '../../hooks/useAuthContext';

const DivStyle = styled.div`
    margin-top: 40px;
    text-align: center;

    img{
        margin-top: 60px;
    }
    `;

const Home = () => {
    const authContext = useAuthContextHook();

    return(
        <DivStyle>
            <h1>Welcome to Sport Clubs</h1>
            <img src={image} alt={'not found'}/>
        </DivStyle>
    );
};

export default Home;