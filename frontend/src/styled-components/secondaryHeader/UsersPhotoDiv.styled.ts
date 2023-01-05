import styled from 'styled-components';
import { Row } from '../figma/Layout.styled';

export const UsersPhotoDiv = styled(Row)`
    position: relative;
    align-items: flex-start;
    /* Auto layout */
    padding: 4px;
    gap: 4px;

    width: 132px;
    height: 25px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0; 
`;