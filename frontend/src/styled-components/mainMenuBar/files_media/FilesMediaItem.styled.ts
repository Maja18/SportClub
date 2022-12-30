import styled from 'styled-components';

const FilesMediaItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left; //center bilo
    align-items: center;
    padding: 0px;
    gap: 13px;

    width: 180px;
    height: 25px;  

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export default FilesMediaItem;