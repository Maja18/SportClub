import styled from 'styled-components';
import Column from '../Column.styled';

const ChatMenuItemsDiv = styled(Column)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 6px;

    width: 289px;
    height: 239px;
    top: 360px;

    /* Inside auto layout */

    flex: none;
    order: 4;
    flex-grow: 0;
   
`;

export default ChatMenuItemsDiv;