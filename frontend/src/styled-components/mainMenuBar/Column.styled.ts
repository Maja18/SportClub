import styled from 'styled-components';

const Column = styled.div`
    display: flex;
    //using display flex in parent elements, 
    //child elements automatically align like columns or rows with auto width and auto height
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 0px;
    gap: 30px;

    position: absolute;
    width: 289px;
    left: 0px;
    top: 122px;
    bottom: 0px;

    background: #28526F;

`;

export default Column;