import styled from 'styled-components';
import {DropDown} from '../../secondaryHeader/DropDown.styled';

const ThreadDropdown = styled(DropDown)<{dropDownOpened: boolean}>`
    width: 200px;
    height: 17px;

    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;

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
        transform: ${props => props.dropDownOpened ? 'rotate(225deg)' : 'rotate(-45deg)'};
        margin-left: 3.50em;
        margin-top: -0.50em;
    }

`;

export default ThreadDropdown;