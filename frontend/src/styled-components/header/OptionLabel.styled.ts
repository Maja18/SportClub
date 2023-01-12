import styled from 'styled-components';

export const OptionLabel = styled.button`
    border: none;
    background-color: transparent;
    font-family: "Roboto-Bold";
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    display: flex;
    align-items: center;

    color: #585757;
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

    span {
        width: 0.6em;
        height: 0.6em;
        display: inline-block;
        vertical-align: middle;
        border-left: 0.20em solid currentColor;
        border-bottom: 0.20em solid currentColor;
        transform: rotate(225deg);
        position:absolute;
        right: 20px;
    }
`;