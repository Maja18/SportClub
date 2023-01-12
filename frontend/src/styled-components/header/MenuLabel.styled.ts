import styled from 'styled-components';
import Label from '../mainMenuBar/threads/Label.styled';

export const MenuLabel = styled(Label)`
    width: 161px;
    height: 42px;

    font-family: "Roboto-Bold";
    font-size: 16px;
    line-height: 140%;
    /* or 22px */

    display: flex;
    align-items: center;

    color: #403E3E;


    /* Inside auto layout */

    flex: none;
    //order: 1;
    order: 0;
    flex-grow: 0;

`;