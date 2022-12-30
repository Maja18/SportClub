import FooterTextTools from "../../styled-components/textBar/FooterTextTools.styled";
import TextBarBox from "../../styled-components/textBar/TextBarBox.styled";
import TextBarDiv from "../../styled-components/textBar/TextBarDiv.styled";
import TextBarFooter from "../../styled-components/textBar/TextBarFooter.styled";
import TextBarLabel from "../../styled-components/textBar/TextBarLabel.styled";
import TextDiv from "../../styled-components/textBar/TextDiv.styled";
import bold_icon from '../../assets/bold_icon.png'
import i_icon from '../../assets/i_icon.png'
import page_elements from '../../assets/page_elements.png'
import case_icon from '../../assets/case_icon.png'
import { FooterListTools } from "../../styled-components/textBar/FooterListTools.styled";
import numbered_list_icon from '../../assets/numbered_list_icon.png'
import numbered_list_icon2 from '../../assets/numbered_list_icon2.png'
import { FooterTools } from "../../styled-components/textBar/FooterTools.styled";
import emoji_icon from '../../assets/emoji_icon.png'
import upload_icon from '../../assets/upload_icon.png'
import vector from '../../assets/vector.png'
import tag_icon from '../../assets/tag_icon.png'
import paper_plane_icon from '../../assets/paper_plane_icon.png'
import { FooterPlane } from "../../styled-components/textBar/FooterPlane.styled";

const TextBar = () => {
    return(
        <TextBarDiv>
            <TextBarBox>
                <TextDiv>
                    <TextBarLabel>
                        Create a new message here...
                    </TextBarLabel>
                </TextDiv>
                <TextBarFooter> 
                    <FooterTextTools>
                        <img src={bold_icon} alt='icon'></img>
                        <img src={i_icon} alt='icon'></img>
                        <img src={page_elements} alt='icon'></img>
                        <img src={case_icon} alt='icon'></img>
                    </FooterTextTools>
                    <FooterListTools>
                        <img src={numbered_list_icon} alt='icon'></img>
                        <img src={numbered_list_icon2} alt='icon'></img>
                    </FooterListTools>
                    <FooterTools>
                        <img src={tag_icon} alt='icon'></img>
                        <img src={emoji_icon} alt='icon'></img>
                        <img src={upload_icon} alt='icon'></img>
                        <img src={vector} alt='icon'></img>
                    </FooterTools>
                    <FooterPlane>
                        <img src={paper_plane_icon} alt='icon'></img>
                    </FooterPlane>
                </TextBarFooter>
            </TextBarBox>
        </TextBarDiv>
    )
}

export default TextBar;