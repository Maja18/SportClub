import styled from 'styled-components';
import Column from '../Column.styled';

const FilesMediaDiv = styled(Column)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 0px 28px;
    gap: 17px;

    width: 237px;
    height: 109px;
    top: 690px;

    /* Inside auto layout */

    flex: none;
    order: 6;
    flex-grow: 0;
`;

export default FilesMediaDiv;