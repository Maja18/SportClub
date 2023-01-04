import styled from 'styled-components';

const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    //background-color:beige;
    width:100%;
    min-height: 100vh;

    @media screen and (max-width: 1200px) {
       
        //background-color:blue;
        //width: 100%;
    }

    @media screen and (min-width: 2100px) {
        //width: 100%;
    }
`;

export default PageDiv;