import styled from 'styled-components';
import { Column } from '../figma/Layout.styled';

export const ProfileOptions = styled(Column)`
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    width: 309px;
    height: 108px;


    /* Inside auto layout */

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;

    //background: beige;
`;