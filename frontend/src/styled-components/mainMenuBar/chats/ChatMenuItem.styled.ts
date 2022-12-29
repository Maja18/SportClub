import styled from 'styled-components';
import Column from '../Column.styled';

const ChatMenuItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 288px;
    height: 43px;
    top: 0px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export default ChatMenuItem;