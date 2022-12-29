import styled from 'styled-components';
import Column from '../Column.styled';

const ChatMenuItemDiv = styled(Column)`
    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    top: 0px;

    width: 289px;
    height: 43px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  
`;

export default ChatMenuItemDiv;