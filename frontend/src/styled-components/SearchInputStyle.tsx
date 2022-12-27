import styled from 'styled-components';
import RowStyle from './RowStyle';

const SearchInputStyle = styled(RowStyle)`
    width: 179px;
    height: 16px;
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #797979;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
        
`;

export default SearchInputStyle;