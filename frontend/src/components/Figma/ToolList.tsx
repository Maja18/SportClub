import {ToolDiv} from "../../styled-components/toolsBar/ToolDiv.styled";
import ToolItem from "../../styled-components/toolsBar/ToolItem.styled";
import {Tools} from "../../styled-components/toolsBar/Tools.styled";
import no_meetings from '../../assets/no_meetings.png'
import {TextDiv} from "../../styled-components/toolsBar/TextDiv.styled";
import {TitleLabel} from "../../styled-components/toolsBar/TitleLabel.styled";
import {SubtitleLabel} from "../../styled-components/toolsBar/SubtitleLabel.styled";
import poll_icon from '../../assets/poll_icon.png'
import sticky_note from '../../assets/sticky_note.png'
import tasks from '../../assets/tasks.png'

const ToolList = () => {
    return(
        <Tools>
            <ToolDiv>
                <ToolItem>
                    <img src={no_meetings} alt='tool'></img>
                    <TextDiv>
                        <TitleLabel>
                            No meetings
                        </TitleLabel>
                        <SubtitleLabel>
                            Click here to create one
                        </SubtitleLabel>
                    </TextDiv>
                </ToolItem>
            </ToolDiv>
            <ToolDiv>
                <ToolItem>
                    <img src={poll_icon} alt='tool'></img>
                    <TextDiv>
                        <TitleLabel>
                            Polls
                        </TitleLabel>
                        <SubtitleLabel>
                            You have 1 new post
                        </SubtitleLabel>
                    </TextDiv>
                </ToolItem>
            </ToolDiv>
            <ToolDiv>
                <ToolItem>
                    <img src={tasks} alt='tool'></img>
                    <TextDiv>
                        <TitleLabel>
                            Tasks
                        </TitleLabel>
                        <SubtitleLabel>
                            4 outstanding tasks
                        </SubtitleLabel>
                    </TextDiv>
                </ToolItem>
            </ToolDiv>
            <ToolDiv>
                <ToolItem>
                    <img src={sticky_note} alt='tool'></img>
                    <TextDiv>
                        <TitleLabel>
                            Sticky notes
                        </TitleLabel>
                        <SubtitleLabel>
                            3 new sticky notes
                        </SubtitleLabel>
                    </TextDiv>
                </ToolItem>
            </ToolDiv>
        </Tools>
    )
}

export default ToolList;