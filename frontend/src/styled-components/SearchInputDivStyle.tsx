import styled from 'styled-components';
import RowStyle from './RowStyle';

const SearchInputDivStyle = styled(RowStyle)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    position: relative;
    width: 179px;
    height: 16px;
    left: 15px;
    top: calc(50% - 16px/2 - 0.5px);  
`;

export default SearchInputDivStyle;