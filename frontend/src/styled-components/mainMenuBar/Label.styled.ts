import styled from 'styled-components';

const Label = styled.label`
    width: 160px;
    height: 19px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export default Label;