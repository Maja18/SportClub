import styled from 'styled-components';
import {LineDevider} from '../LineDevider.styled';

export const ChatLineDevider = styled(LineDevider)`
    top: ${props => props.dropDownOpened ? '0px' : '10px;'};
    order: 5;
`;