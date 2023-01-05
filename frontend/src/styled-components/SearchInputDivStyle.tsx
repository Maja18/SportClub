import styled from 'styled-components';
import { Row } from './figma/Layout.styled';

const SearchInputDivStyle = styled(Row)`
    padding: 0px;
    gap: 10px;

    position: relative;
    width: 179px;
    height: 16px;
    left: 15px;
    top: calc(50% - 16px/2 - 0.5px);  
`;

export default SearchInputDivStyle;