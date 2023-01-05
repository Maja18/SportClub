import styled from 'styled-components';
import { Row } from '../figma/Layout.styled';

const ToolItem = styled(Row)`  //Frame 41
    align-items: center;
    padding: 0px;
    gap: 15px;

    position: relative;
    width: 178px;
    height: 38px;
    left: 15px;
    top: calc(50% - 38px/2 - 0.5px);

`;

export default ToolItem;