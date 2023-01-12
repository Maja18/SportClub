import styled from 'styled-components';

export const ItemLabel = styled.label<{active: boolean}>`
    width: 269px;
    height: 19px;

    font-family: "Roboto-Regular";
    font-weight: ${props => props.active ? "700" : "500"};
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    display: flex;
    align-items: center;
    
    color: ${props => props.active ? "#307FB6" : "#585757"};

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0
`;