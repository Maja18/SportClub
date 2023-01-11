
import { useState } from 'react';
import PageDiv from '../../styled-components/figma/PageDiv.styled';
import { MenuBar } from '../../styled-components/mainMenuBar/MenuBar.styled';
import Header from './Header';
import MainMenuBar from './MainMenuBar';
import Messages from './Messages';
import SecondHeader from './SecondHeader';
import TextBar from './TextBar';
import ToolsBar from './ToolsBar';

const Figma = () => {
    const [showToolbar, setShowToolBar] = useState(true);
    
    return(
        <div style={{maxHeight:'100vh'}}>
            <Header></Header>
            <SecondHeader toggleToolbar = {() => setShowToolBar(!showToolbar)}></SecondHeader>
            <div style={{display:'flex', alignItems: 'flex-start', flex:1}}>
                <div style={{ flex:'0 1 289px', height:'100%'}}>
                    <MainMenuBar></MainMenuBar>
                </div>
                <div style={{ flex:'1', height:'100%', display:'flex', flexDirection: 'column'}}>
                    <div style={{ flex:'0 1 85%', height:'100%'}}>
                        <Messages></Messages>
                    </div>
                    <div>
                        <TextBar></TextBar>
                    </div>
                </div>
                <div style={{ flex:'0 1 289px', height:'100%'}}>
                    <ToolsBar></ToolsBar>
                </div>
           </div>
        </div>
    );
}

export default Figma;