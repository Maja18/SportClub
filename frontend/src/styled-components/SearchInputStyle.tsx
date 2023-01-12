import styled from 'styled-components';
import { Row } from './figma/Layout.styled';

const SearchInputStyle = styled(Row)`
    height: 16px;
    font-family: "Roboto-Italic";

    font-size: 14px;
    line-height: 16px;
    align-items: center;
    color: #797979;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
        
`;

export default SearchInputStyle;