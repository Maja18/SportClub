import styled from 'styled-components';
import { Column } from '../../figma/Layout.styled';

export const ChatMenuItemsDiv = styled(Column)`
    padding: 0px;
    gap: 6px;
    align-items: flex-start;

    width: 100%;
    //height: 100%;
    //height: 239px;

    position: relative;
    top: 40px;


    /* Inside auto layout */

    flex: none;
    order: 4;
    flex-grow: 0;
   
`;