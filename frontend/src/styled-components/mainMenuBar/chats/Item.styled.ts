import styled from 'styled-components';
import { Row } from '../../figma/Layout.styled';

export const Item = styled(Row)`  //Main menu bar
    justify-content: center; 
    align-items: center;
    padding: 5px 28px;
    gap: 12px;

    width: 288px;
    height: 43px;
    position: relative;
    top: 0px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  
`;