import styled from 'styled-components';

const ToolItem = styled.div`
    display: flex;
    flex-direction: row;
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