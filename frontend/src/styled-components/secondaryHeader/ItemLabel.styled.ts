import styled from 'styled-components';
import Label from '../mainMenuBar/threads/Label.styled';

export const ItemLabel = styled.label`
    width: 269px;
    height: 19px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    display: flex;
    align-items: center;
    
    color: #585757;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0
`;