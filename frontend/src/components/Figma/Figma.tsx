
import PageDiv from '../../styled-components/figma/PageDiv.styled';
import Header from './Header';
import MainMenuBar from './MainMenuBar';
import Messages from './Messages';
import SecondHeader from './SecondHeader';
import TextBar from './TextBar';
import ToolsBar from './ToolsBar';

const Figma = () => {
    return(
        <PageDiv>
            <Header></Header>
            <SecondHeader></SecondHeader>
            <MainMenuBar></MainMenuBar>
            <Messages></Messages>
            <ToolsBar></ToolsBar>
            <TextBar></TextBar>
        </PageDiv>
    );
}

export default Figma;