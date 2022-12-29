import TextBarBox from "../../styled-components/textBar/TextBarBox.styled";
import TextBarDiv from "../../styled-components/textBar/TextBarDiv.styled";
import TextBarFooter from "../../styled-components/textBar/TextBarFooter.styled";
import TextBarLabel from "../../styled-components/textBar/TextBarLabel.styled";
import TextDiv from "../../styled-components/textBar/TextDiv.styled";

const TextBar = () => {
    return(
        <TextBarDiv>
            <TextBarBox>
                <TextBarFooter>
                    <TextDiv>
                        <TextBarLabel>
                            Create a new message here...
                        </TextBarLabel>
                    </TextDiv>
                </TextBarFooter>
            </TextBarBox>
        </TextBarDiv>
    )
}

export default TextBar;