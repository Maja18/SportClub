
import styled from 'styled-components';
import { Column } from '../figma/Layout.styled';

export const DropDownMenu = styled(Column)`
    align-items: flex-start;
    justify-content: center;
    padding: 0px;
    gap: 10px;

    position: relative;
    width: 309px;
    height: 149px;

    margin: auto 0 auto auto;
    
    left: 0px;
    right: 0px;
    top: 10px;
    bottom: 0px;

    background: #F7F7F8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    z-index: 1;
`;