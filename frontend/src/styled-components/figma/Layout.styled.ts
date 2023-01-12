import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainContent = styled(Row)`
    align-items: flex-start;
    flex: 1;
`;

export const CenterContent = styled(Column)`
    flex: 1;
`;