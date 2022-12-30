import styled from 'styled-components';
import {DropDown} from '../secondaryHeader/DropDown.styled';

export const HeaderDropdown = styled(DropDown)`
    width: 400px;
    height: 43px;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0em;
    line-height: 150%;
    /* or 22px */

    display: flex;
    align-items: center;
    text-align: left;

   /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;

    span {
        width: 0.7em;
        height: 0.7em;
        display: inline-block;
        vertical-align: middle;
        border-left: 0.20em solid currentColor;
        border-bottom: 0.20em solid currentColor;
        transform: rotate(225deg);
        margin-left: 0.7em;
        margin-top: 0em;
    }

`;