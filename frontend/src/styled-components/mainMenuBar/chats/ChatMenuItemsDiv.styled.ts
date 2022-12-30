import styled from 'styled-components';
import { Column } from '../../figma/Layout.styled';

const ChatMenuItemsDiv = styled(Column)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 6px;

    width: 289px;
    height: 239px;

    position: relative;
    top: 95px;

    /* Inside auto layout */

    flex: none;
    order: 4;
    flex-grow: 0;
   
`;

export default ChatMenuItemsDiv;