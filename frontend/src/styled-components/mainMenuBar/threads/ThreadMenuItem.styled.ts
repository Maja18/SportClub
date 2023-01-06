import { Row } from 'reactstrap';
import styled from 'styled-components';

const ThreadMenuItem = styled(Row)`
    justify-content: center;
    align-items: center;
    padding: 5px 28px;
    gap: 12px;
    margin:0;

    //width: 288px;
    width: 100%;
    height: 29px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    &:hover {
        background: rgba(152, 191, 218, 0.5)
    }  
`;

export default ThreadMenuItem;