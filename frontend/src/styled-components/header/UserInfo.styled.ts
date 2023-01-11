import styled from 'styled-components';
import { Row } from '../figma/Layout.styled';

export const UserInfo = styled(Row)`
    justify-content: space-between;
    align-items: center;
    //padding: 0px 20px 0px 0px;
    padding: 0px 30px 0px 0px;
    gap: 37px;

    width: 309px;
    height: 49px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;