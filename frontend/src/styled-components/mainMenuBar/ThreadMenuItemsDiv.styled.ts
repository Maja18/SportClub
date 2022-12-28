import styled from 'styled-components';
import Column from './Column.styled';

const ThreadMenuItemsDiv = styled(Column)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;

    width: 288px;
    height: 131px;
    top: 80px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

export default ThreadMenuItemsDiv;