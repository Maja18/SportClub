import styled from 'styled-components';
import { Column } from '../../figma/Layout.styled';

export const FilesMediaDiv = styled(Column)`
    align-items: flex-start;
    padding: 0px 0px 0px 28px;
    gap: 17px;

    //width: 237px;
    width: 100%;
    //height: 109px;
    position: relative;
    bottom: -10px;

    /* Inside auto layout */

    flex: none;
    order: 6;
    flex-grow: 0;
`;
