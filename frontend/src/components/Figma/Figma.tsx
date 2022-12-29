
import RowStyle from '../../styled-components/header/RowStyle';
import Header from './Header';
import MainMenuBar from './MainMenuBar';
import SecondHeader from './SecondHeader';
import ToolsBar from './ToolsBar';

const Figma = () => {
    return(
        <div>
            <RowStyle>
                <Header></Header>
                <SecondHeader></SecondHeader>
            </RowStyle>
            <MainMenuBar></MainMenuBar>
            <ToolsBar></ToolsBar>
        </div>
    );
}

export default Figma;