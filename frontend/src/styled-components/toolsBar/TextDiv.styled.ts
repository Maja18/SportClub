import styled from 'styled-components';
import { Column } from '../figma/Layout.styled';

export const TextDiv = styled(Column)`
    justify-content: center;
    padding: 0px;
    gap: 12px;

    width: 160px;
    height: 38px;
    position: relative;
    top: 0px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;

`;