import styled from 'styled-components';
import Column from './Column.styled';

const Threads = styled(Column)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 0px 28px;
    gap: 61px;

    width: 201.64px;
    height: 17px;
    top: 30px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    

`;

export default Threads;