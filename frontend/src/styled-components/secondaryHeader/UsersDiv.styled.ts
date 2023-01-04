import styled from 'styled-components';
import { Row } from '../figma/Layout.styled';

export const UsersDiv = styled(Row)`
    /* Auto layout */
    flex-direction: column;
    padding: 4px;
    gap: 10px;

    position: relative;
    width: 197px;
    height: 33px;
    margin-left: auto;
    left: -60px;
    top: calc(50% - 33px/2);

    background: #F7F7F7;
    border-radius: 4px;
    
`;