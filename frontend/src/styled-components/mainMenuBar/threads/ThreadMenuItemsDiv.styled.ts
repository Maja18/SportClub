import styled from 'styled-components';
import { Column } from '../../figma/Layout.styled';

export const ThreadMenuItemsDiv = styled(Column)`
    align-items: flex-start;
    padding: 0px;
    gap: 5px;

    width: 100%;
    height: 131px;
    position: relative;
    top: 30px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;