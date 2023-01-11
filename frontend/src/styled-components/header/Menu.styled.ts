import styled from 'styled-components';
import { Column } from '../figma/Layout.styled';

export const MenuDiv = styled(Column)` 
    box-sizing: border-box;

    /* Auto layout */
    align-items: flex-start;
    padding: 29px 0px 18px;
    //gap: 29px;

    gap: 19px;

    position: relative;
    right: 390px;
    width: 309px;
    top: 10px;
    //height: 483px;

    background: #FFFFFF;
    border: 2px solid #E9E9E9;
    border-radius: 8px;
    z-index: 1;
    `;