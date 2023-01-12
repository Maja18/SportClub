import styled from 'styled-components';
import Label from '../mainMenuBar/threads/Label.styled';

export const ItemLabel = styled.label<{active: boolean}>`
    width: 269px;
    height: 19px;

    font-family: "Roboto-Regular";
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    display: flex;
    align-items: center;
    
    color: ${props => props.active ? "#307FB6" : "#585757"};
    //color: #585757;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0
`;