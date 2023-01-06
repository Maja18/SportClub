import styled from 'styled-components';

export const LineDevider = styled.hr`
    width: 289px;
    height: 0px;

    position: relative;
    top: 20px;

    mix-blend-mode: lighten;
    border: 2px solid rgba(255, 255, 255, 0.45);

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
    
`;