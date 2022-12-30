import styled from 'styled-components';
import { Column } from '../../figma/Layout.styled';

const FilesMediaDiv = styled(Column)`
    padding: 0px 0px 0px 28px;
    gap: 17px;

    width: 237px;
    height: 109px;
    position: relative;
    top: 130px;

    /* Inside auto layout */

    flex: none;
    order: 6;
    flex-grow: 0;
`;

export default FilesMediaDiv;