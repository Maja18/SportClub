import styled from 'styled-components';
import RowStyle from '../header/RowStyle';

const UsersInputDiv = styled(RowStyle)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 15px 0px 0px;
    gap: 17px;

    width: 189px;
    height: 25px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    
`;

export default UsersInputDiv;