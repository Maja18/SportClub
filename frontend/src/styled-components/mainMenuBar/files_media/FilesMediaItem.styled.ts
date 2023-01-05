import styled from 'styled-components';
import { Row } from '../../figma/Layout.styled';

export const FilesMediaItem = styled(Row)`
    justify-content: flex-start; //center bilo
    align-items: center;
    padding: 0px;
    gap: 13px;

    width: 100%;
    height: 25px; 
    position: relative;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;