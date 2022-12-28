import styled from 'styled-components';
import ThreadDropdown from './ThreadDropdown.styled';

const ChatDropdown = styled(ThreadDropdown)`
   span {
        width: 0.7em;
        height: 0.7em;
        display: inline-block;
        vertical-align: middle;
        border-left: 0.20em solid currentColor;
        border-bottom: 0.20em solid currentColor;
        transform: rotate(-45deg);
        margin-left: 6em;
        margin-top: -0.50em;
    }
`;

export default ChatDropdown;