import { DateMarker } from "../../styled-components/messages/DateMarker.styled";
import { MessagesDiv } from "../../styled-components/messages/MessagesDiv.styled";
import user_ana from '../../assets/user_ana.png'
import user_bob from '../../assets/user_bob.png'
import user_peter from '../../assets/user_peter.png'
import { DateMarkerDiv } from "../../styled-components/messages/DateMarkerDiv.styled";
import { MessageDiv } from "../../styled-components/messages/MessageDiv.styled";
import { Message } from "../../styled-components/messages/Message.styled";
import { MessageText } from "../../styled-components/messages/MessageText.styled";
import new_frame from '../../assets/new_frame.png'
import { MessageDevider } from "../../styled-components/messages/MessageDevider.styled";
import { ProfileName } from "../../styled-components/messages/ProfileName.styled";
import { MessagesContainer } from "../../styled-components/messages/MessagesContainer.styled";

const Messages = () => {
    return(
        <MessagesContainer> {/* flex container */}
            <DateMarkerDiv> {/* flex item */}
                <DateMarker>
                    Today
                    <span></span>
                </DateMarker>
            </DateMarkerDiv>
            <MessagesDiv> {/* flex item */}
                {/* Anna */}
                <MessageDiv>
                    <img src={user_ana} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Anna 13:47:
                        </ProfileName>
                        <MessageText>
                        <br/>
                            Ok, thats absolutly perfect. What about different colour options, did you have any specific preferences?
                        </MessageText>
                    </Message>
                </MessageDiv>
                {/* Bob */}
                <MessageDiv>
                    <img src={user_bob} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Bob 13:47:
                        </ProfileName>
                        <MessageText>
                            <br/>
                            Yes I really liked the blue and orange layout, what did the rest of the team think?
                        </MessageText>
                    </Message>
                </MessageDiv>
                {/* Anna */}
                <MessageDiv>
                    <img src={user_ana} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Anna 13:49:
                        </ProfileName>
                        <MessageText>
                            <br/>
                            Acctually I think most people agreed, it was by far most popular choice.
                        </MessageText>
                    </Message>
                </MessageDiv>
                {/* Bob */}
                <MessageDiv>
                    <img src={user_bob} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Bob 14:08:
                        </ProfileName>
                        <MessageText>
                           <br/>
                            Yeah let's go that then. Thanks Anna.
                        </MessageText>
                    </Message>
                </MessageDiv>
                {/* new */}
                <img src={new_frame} alt='new messages'></img>
                <div>
                    <MessageDevider></MessageDevider>
                </div>
                {/* Anna */}
                <MessageDiv>
                    <img src={user_ana} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Anna 14:06:
                        </ProfileName>
                        <MessageText>
                           <br/>
                            Ok sure.
                        </MessageText>
                    </Message>
                </MessageDiv>
                {/* Peter */}
                <MessageDiv>
                    <img src={user_peter} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Peter 13:48:
                        </ProfileName>
                        <MessageText>
                            <br/>
                            It's coming together really well. Colin is flying over from Atlanta next week so I'll ask him to come in and take a look?
                        </MessageText>
                    </Message>
                </MessageDiv>
                {/* Anna */}
                <MessageDiv>
                    <img src={user_ana} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Anna 13:49:
                        </ProfileName>
                        <MessageText>
                           <br/>
                            Ok great!
                        </MessageText>
                    </Message>
                </MessageDiv>
            </MessagesDiv>
        </MessagesContainer>
    )
}

export default Messages;