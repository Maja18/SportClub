import styled from 'styled-components';

const PageDiv = styled.div`
    position: fixed;
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0;
    width: 100%;
    height: auto;
    

    @media screen and (max-width: 1200px) {
        div {
        background-color:blue;
    }
    }
`;

export default PageDiv;