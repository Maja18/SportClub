import styled from 'styled-components';
import { Row } from '../../figma/Layout.styled';

export const ChatMenuItem = styled(Row)` //frame 18
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 100%;
    height: 43px;
    margin: 0px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

    &:hover {
        background: rgba(152, 191, 218, 0.5)
    }
`;
