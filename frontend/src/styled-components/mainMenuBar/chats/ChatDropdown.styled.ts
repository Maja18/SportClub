import styled from 'styled-components';
import ThreadDropdown from '../threads/ThreadDropdown.styled';

export const ChatDropdown = styled(ThreadDropdown)`
   span {
        width: 0.7em;
        height: 0.7em;
        display: inline-block;
        vertical-align: middle;
        border-left: 0.20em solid currentColor;
        border-bottom: 0.20em solid currentColor;
        transform: ${props => props.dropDownOpened ? 'rotate(225deg)' : 'rotate(-45deg)'};
        margin-left: 6em;
        margin-top: -0.50em;
    }
`;