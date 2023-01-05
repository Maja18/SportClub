import styled from 'styled-components';
import { Column } from '../figma/Layout.styled';

export const MessagesContainer = styled(Column)`
    align-items: flex-start;
    position: relative;
    //width: 1270px;
    width: 66%;
    height: 684px;
    left: 321px;
    top: 30px;
    bottom: 0px;
    overflow-y: scroll;
    padding: 10px 0px;

    ::-webkit-scrollbar {
        display: none;
    }
`;