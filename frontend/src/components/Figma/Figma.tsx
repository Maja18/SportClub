
import { useState } from 'react';
import { Column, Row } from '../../styled-components/figma/Layout.styled';
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
            <Row>
                <MainMenuBar></MainMenuBar> 
                <Column>
                    <Messages></Messages>
                    <TextBar></TextBar>
                </Column>     
                {showToolbar ? <ToolsBar></ToolsBar> : null}
            </Row>
        </div>
    );
}

export default Figma;