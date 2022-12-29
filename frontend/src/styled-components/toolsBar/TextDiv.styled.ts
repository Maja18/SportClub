import styled from 'styled-components';
import Column from '../mainMenuBar/Column.styled';

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    width: 160px;
    height: 38px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;

`;

export default TextDiv;