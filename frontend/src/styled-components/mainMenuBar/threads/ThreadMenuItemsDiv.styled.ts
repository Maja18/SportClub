import styled from 'styled-components';
import { Column } from '../../figma/Layout.styled';

const ThreadMenuItemsDiv = styled(Column)`
    padding: 0px;
    gap: 5px;

    width: 288px;
    height: 131px;
    position: relative;
    top: 50px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

export default ThreadMenuItemsDiv;