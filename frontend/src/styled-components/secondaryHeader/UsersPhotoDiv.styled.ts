import styled from 'styled-components';
import RowStyle from '../header/RowStyle';

const UsersPhotoDiv = styled(RowStyle)`
    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 4px;
    gap: 4px;

    width: 132px;
    height: 25px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0; 
`;

export default UsersPhotoDiv;