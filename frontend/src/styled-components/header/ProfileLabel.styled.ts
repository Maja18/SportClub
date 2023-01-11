import styled from 'styled-components';
import Label from '../mainMenuBar/threads/Label.styled';

export const ProfileLabel = styled(Label)`
    width: 180px;
    height: 42px;

    font-weight: 700;
    line-height: 140%;
    /* or 22px */
    
    color: #403E3E;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

`;