import styled from 'styled-components';
import { Row } from '../figma/Layout.styled';

export const SearchBarStyle = styled(Row)` 
    //position: absolute;
    position: relative;
    align-items: flex-start;
    width: 800px;
    height: 35px;
    margin: 0 auto;
    top: calc(50% - 35px/2);
    background-color: #F6F6F6;
    border-radius: 8px;
    border: 3px solid #F6F6F6;
    box-sizing: border-box;
`;