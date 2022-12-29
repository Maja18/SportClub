import styled from 'styled-components';
import Column from '../Column.styled';

const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;  //center tamo?
    align-items: center;
    padding: 5px 28px;
    gap: 12px;

    width: 288px;
    height: 43px;
    top: 0px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  
`;

export default Item;