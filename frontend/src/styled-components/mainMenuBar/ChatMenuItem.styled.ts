import styled from 'styled-components';
import Column from './Column.styled';

const ChatMenuItem = styled(Column)`
    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    top: 10px;

    width: 289px;
    height: 43px;
  
`;

export default ChatMenuItem;