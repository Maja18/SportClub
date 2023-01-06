import styled from 'styled-components';
import { Row } from '../figma/Layout.styled';

export const MessageDiv = styled(Row)`
    width: 100%;
    height: 69px;
    align-items: center;

    margin: auto;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

    &:hover {
        background: #f8f8f8
    }
        
`;