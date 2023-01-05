import styled from 'styled-components';

export const DropDown = styled.button`
    border: none;
    background-color: transparent;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 0.455em;
    line-height: 15px;
    color: #FFFFFF;

    span {
        width: 0.7em;
        height: 0.7em;
        display: inline-block;
        vertical-align: middle;
        border-left: 0.20em solid currentColor;
        border-bottom: 0.20em solid currentColor;
        transform: rotate(-45deg);
        margin-left: 0.50em;
        margin-top: -0.50em;
    }

`;