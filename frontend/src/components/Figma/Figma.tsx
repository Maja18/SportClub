
import PageDiv from '../../styled-components/figma/PageDiv.styled';
import RowStyle from '../../styled-components/header/RowStyle';
import Header from './Header';
import MainMenuBar from './MainMenuBar';
import SecondHeader from './SecondHeader';
import TextBar from './TextBar';
import ToolsBar from './ToolsBar';

const Figma = () => {
    return(
        <PageDiv>
            <RowStyle>
                <Header></Header>
                <SecondHeader></SecondHeader>
            </RowStyle>
            <MainMenuBar></MainMenuBar>
            <ToolsBar></ToolsBar>
            <TextBar></TextBar>
        </PageDiv>
    );
}

export default Figma;