import styled from 'styled-components';
import { Row } from '../../figma/Layout.styled';

export const LabelDiv = styled(Row)`
    padding: 0px;
    gap: 10px;

    width: 186px;
    height: 19px;
    position: relative;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;
