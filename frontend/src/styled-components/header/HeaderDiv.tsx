import styled from 'styled-components';
import { Row } from '../figma/Layout.styled';

export const HeaderDiv = styled(Row)`
    background: #2B0B2D;

    @media screen and (max-width: 768px) {
        //flex-direction: column;  
        background: yellow;  
   }
`;
