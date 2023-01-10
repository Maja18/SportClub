import styled from 'styled-components';
import { Row } from '../figma/Layout.styled';
import Label from '../mainMenuBar/threads/Label.styled';

export const MenuItem = styled(Row)`
    align-items: center;
    padding: 0px 0px 0px 17px; 
    gap: 20px;

    //width: 244px;
    width: 100%;
    height: 28px;

    //background: yellow;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

    &:hover {
        background: #f1f1f1;
    }

`;