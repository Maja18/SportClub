import styled from 'styled-components';
import { Column} from '../figma/Layout.styled';

export const UserProfileInfo = styled(Column)` 
    box-sizing: border-box;

    /* Auto layout */
    align-items: flex-start;
    padding: 29px 0px 18px 17px;
    //gap: 29px;
    gap: 19px;

    position: relative;
    width: 309px;
    //height: 367px;
    margin: auto 0 auto auto;
    right: 10px;
    top: 13px;

    background: #FFFFFF;
    border: 2px solid #E9E9E9;
    border-radius: 8px;
    z-index: 1;
    
`;