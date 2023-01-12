import styled from 'styled-components';
import { Column} from '../figma/Layout.styled';

export const MenuBar = styled(Column)`
    background: #28526F;
    align-items: flex-start;
    padding: 30px 0px;
    gap: 30px;

    position: relative;
    width: 100%;
    height: calc(100vh - 75px - 47px);
    left: 0px;
    top: 0px;
    bottom: 0px;

    flex: 0 1 289px;
`;
