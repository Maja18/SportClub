import styled from 'styled-components';
import { Column } from '../../figma/Layout.styled';

export const ThreadMenuItemsDiv = styled(Column)`
    align-items: flex-start;
    padding: 0px 0px 20px 0px;
    gap: 5px;

    width: 100%;
    //height: 131px;
    //height: 100%;
    /* Inside auto layout */
    border-bottom: 2px solid rgba(255, 255, 255, 0.45);
    flex: none;
    order: 1;
    flex-grow: 0;
`;