
import styled from 'styled-components';
import { Row } from '../../figma/Layout.styled';

export const ItemDiv = styled(Row)`
    padding: 0px;
    gap: 10px;

    width: 234px;
    height: 19px;
    position: relative;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;
