import React , {useContext, useEffect} from 'react';
import image from '../../assets/background.png'
import styled from 'styled-components';

const DivStyle = styled.div`
    margin-top: 40px;
    text-align: center;

    img{
        margin-top: 60px;
    }
    `;

const Home = () => {
    return(
        <DivStyle>
            <h1>Welcome to Sport Clubs</h1>
            <img src={image} alt={'not found'}/>
        </DivStyle>
    );
};

export default Home;