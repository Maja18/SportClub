import styled from 'styled-components';
import { Column} from '../figma/Layout.styled';

export const MenuOptions = styled(Column)` 
    align-items: flex-start;
    padding: 0px 0px 0px 17px;
    gap: 12px;

    width: 309px;
    height: 148px;

    /* Inside auto layout */

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
`;