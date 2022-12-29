import styled from 'styled-components';
import Column from '../Column.styled';

const ThreadMenuItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 28px;
    gap: 12px;

    width: 288px;
    height: 29px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    
`;

export default ThreadMenuItem;