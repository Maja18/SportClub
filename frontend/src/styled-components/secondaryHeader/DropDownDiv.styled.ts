import styled from 'styled-components';
import { Row } from '../figma/Layout.styled';

export const DropDownDiv = styled(Row)`
    justify-content: center;
    align-items: center;
    position: relative;
    /* Auto layout */
    padding: 0px;
    gap: 14px;

    width: 300px;
    height: 100%;
    left: calc(50% - 233.64px/2 - 0.18px);
    //top: calc(50% - 8px/2 - 0.5px);
    top: 0px;
    right: 0px;
`;