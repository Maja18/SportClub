import styled from 'styled-components';
import DropDown from '../secondaryHeader/DropDown.styled';

const ThreadDropdown = styled(DropDown)`
    width: 200px;
    height: 17px;

    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.455em;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    span {
        width: 0.7em;
        height: 0.7em;
        display: inline-block;
        vertical-align: middle;
        border-left: 0.20em solid currentColor;
        border-bottom: 0.20em solid currentColor;
        transform: rotate(-45deg);
        margin-left: 3.50em;
        margin-top: -0.50em;
    }

`;

export default ThreadDropdown;