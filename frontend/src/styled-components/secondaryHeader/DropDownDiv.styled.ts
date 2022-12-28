import styled from 'styled-components';
import RowStyle from '../header/RowStyle';

const DropDownDiv = styled(RowStyle)`
    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 14px;

    width: 300px;
    height: 8px;
    left: calc(50% - 233.64px/2 - 0.18px);
    top: calc(50% - 8px/2 - 0.5px);
`;

export default DropDownDiv;