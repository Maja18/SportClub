import styled from 'styled-components';
import RowStyle from './RowStyle';

const SearchBarStyle = styled(RowStyle)`
    position: relative;
    width: 800px;
    height: 35px;
    left: calc(50% - 800px/2);
    top: calc(50% - 35px/2);
    background-color: #F6F6F6;
    border-radius: 8px;
`;

export default SearchBarStyle;