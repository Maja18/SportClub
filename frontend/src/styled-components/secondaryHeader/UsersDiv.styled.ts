import styled from 'styled-components';
import RowStyle from '../header/RowStyle';

const UsersDiv = styled(RowStyle)`
    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px;
    gap: 10px;

    position: relative;
    width: 197px;
    height: 33px;
    left: 1627px;
    //right: 93px;
    top: calc(50% - 33px/2);

    background: #F7F7F7;
    border-radius: 4px;
    
`;

export default UsersDiv;