
import { Row } from '../../styled-components/figma/Layout.styled';
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
           <div style={{background:'grey', flex:'0 1 75px', display:'flex'}}>
             Header1
           </div>
           <div style={{background:'beige', flex:'0 1 47px', display:'flex'}}>
             Header2
           </div>
           <div style={{display:'flex', alignItems: 'flex-start', background:'red', flex:1}}>
                <div style={{background:'green', flex:'0 1 289px', height:'100%'}}>
                    Menu
                </div>
                <div style={{background:'blue', flex:'1', height:'100%', display:'flex', flexDirection: 'column'}}>
                    <div style={{background:'lightBlue', flex:'0 1 85%', height:'100%'}}>
                        Messages
                    </div>
                    <div>
                        Footer
                    </div>
                </div>
                <div style={{background:'pink', flex:'0 1 289px', height:'100%'}}>
                    Tool bar
                </div>
           </div>
            
        </PageDiv>
    );
}

export default Figma;