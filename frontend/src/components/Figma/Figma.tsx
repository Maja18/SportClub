
import { useState } from 'react';
import PageDiv from '../../styled-components/figma/PageDiv.styled';
import Header from './Header';
import MainMenuBar from './MainMenuBar';
import Messages from './Messages';
import SecondHeader from './SecondHeader';
import TextBar from './TextBar';
import ToolsBar from './ToolsBar';

const Figma = () => {
    const [showToolbar, setShowToolBar] = useState(true);
    
    return(
        <PageDiv>
            <Header></Header>
            <SecondHeader toggleToolbar = {() => setShowToolBar(!showToolbar)}></SecondHeader>
            <MainMenuBar></MainMenuBar>
            <Messages></Messages>
            {showToolbar ? <ToolsBar></ToolsBar> : null}
            <TextBar></TextBar>
        </PageDiv>
    );
}

export default Figma;