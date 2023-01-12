
import { useState } from 'react';
import { CenterContent, MainContent } from '../../styled-components/figma/Layout.styled';
import Header from './Header';
import MainMenuBar from './MainMenuBar';
import Messages from './Messages';
import SecondHeader from './SecondHeader';
import TextBar from './TextBar';
import ToolsBar from './ToolsBar';

const Figma = () => {
    const [showToolbar, setShowToolBar] = useState(true);
    
    return(
        <div>
            <Header></Header>
            <SecondHeader toggleToolbar = {() => setShowToolBar(!showToolbar)}></SecondHeader>
            <MainContent>
                <MainMenuBar></MainMenuBar> 
                <CenterContent>
                    <Messages></Messages>
                    <TextBar></TextBar>
                </CenterContent>     
                {showToolbar ? <ToolsBar></ToolsBar> : null}
            </MainContent>
        </div>
    );
}

export default Figma;