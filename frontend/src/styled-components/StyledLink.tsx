import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: blue;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    padding: 8px 6px;
    width: 100%;

    &.active {
        color: white;
    }

`;

export default StyledLink;