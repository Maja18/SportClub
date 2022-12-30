import styled from 'styled-components';

export const MessageDevider = styled.hr`
    width: 1200px;
    height: 0px;

    border: 2px solid rgba(22, 180, 57, 0.25);

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`;