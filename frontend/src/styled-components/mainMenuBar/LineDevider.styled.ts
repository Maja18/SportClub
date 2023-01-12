import styled from 'styled-components';

export const LineDevider = styled.div`
    width: 289px;
    height: 0px;

    position: relative;
    top:0px;

    //mix-blend-mode: lighten;
    border: 1px solid rgba(255, 255, 255, 0.45);

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
    
`;