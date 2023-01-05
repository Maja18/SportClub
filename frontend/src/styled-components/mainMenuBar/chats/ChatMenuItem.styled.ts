import styled from 'styled-components';
import { Row } from '../../figma/Layout.styled';

export const ChatMenuItem = styled(Row)` //frame 18
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 288px;
    height: 43px;
    position: relative;
    top: 0px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;
