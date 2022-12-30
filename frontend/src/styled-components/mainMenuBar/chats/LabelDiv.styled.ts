import styled from 'styled-components';
import Column from '../Column.styled';

const LabelDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    width: 186px;
    height: 19px;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

export default LabelDiv;