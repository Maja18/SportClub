import styled from 'styled-components';
import { Row } from '../figma/Layout.styled';


const UsersNumberImage = styled(Row)`
    position: relative;
    left: 15px;
  /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    
`;

export default UsersNumberImage;