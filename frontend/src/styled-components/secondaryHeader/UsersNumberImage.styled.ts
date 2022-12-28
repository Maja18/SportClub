import styled from 'styled-components';
import RowStyle from '../header/RowStyle';

const UsersNumberImage = styled(RowStyle)`
    position: relative;
    left: 15px;
  /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    
`;

export default UsersNumberImage;