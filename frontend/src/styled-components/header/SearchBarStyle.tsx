import styled from 'styled-components';
import { Row } from '../figma/Layout.styled';

export const SearchBarStyle = styled(Row)` 
    //position: relative;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);

    align-items: flex-start;
    width: 800px;
    height: 35px;
    top: calc(35px/2);
    right: 0px;
    background-color: #F6F6F6;
    border-radius: 8px;
    border: 3px solid #F6F6F6;
    box-sizing: border-box;
`;