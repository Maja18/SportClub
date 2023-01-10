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
import MessageTools from "./MessageTools";
import { useState } from "react";
import { uuid } from 'uuidv4';

type Element = {
    id: number,
    isHovered: false
}

const Messages = () => {
    const [hover, setHover] = useState<Element | any>({} as Element);

    const mouseOver = (event: any, index: any) => {
        console.log('hover')
        setHover((c: any) => {
            return {
                ...c,
                id: index,
                isHovered : true,
            };
        })
    }

    const mouseOut = (event: any, index: any) => {
        console.log('hover stop')
        setHover((c: any) => {
            return {
                ...c,
                id: index,
                isHovered : false,
            };
        })
    }

    return(
        <MessagesContainer> {/* flex container */}
                <DateMarkerDiv> {/* flex item */}
                    <DateMarker>
                        Yesterday
                        <span></span>
                    </DateMarker>
                </DateMarkerDiv>
            <div style={{marginTop:'40px', width: '100%'}}>
                {/* additional messages */}
                {/* Anna */}
                <MessageDiv 
                    onMouseEnter={(e) => {
                        mouseOver(e, 1);
                    }} 
                    onMouseLeave={(e) => {
                        mouseOut(e, 1);
                    }} >
                    <img src={user_ana} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Anna 14:06:
                        </ProfileName>
                        <MessageText>
                            Ok sure.
                        </MessageText>
                    </Message>
                    {hover.isHovered && hover.id === 1 ? <MessageTools></MessageTools>: null}
                </MessageDiv>
                {/* Peter */}
                <MessageDiv 
                    onMouseEnter={(e) => {
                        mouseOver(e, 2);
                    }} 
                    onMouseLeave={(e) => {
                        mouseOut(e, 2);
                    }} >
                    <img src={user_peter} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Peter 13:48:
                        </ProfileName>
                        <MessageText>
                            It's coming together really well. Colin is flying over from Atlanta next week so I'll ask him to come in and take a look?
                        </MessageText>
                    </Message>
                    {hover.isHovered && hover.id === 2 ? <MessageTools></MessageTools>: null}
                </MessageDiv>
                {/* Anna */}
                <MessageDiv 
                    onMouseEnter={(e) => {
                        mouseOver(e, 3);
                    }}
                    onMouseLeave={(e) => {
                        mouseOut(e, 3);
                    }} >
                    <img src={user_ana} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Anna 13:49:
                        </ProfileName>
                        <MessageText>
                            Ok great!
                        </MessageText>
                    </Message>
                    {hover.isHovered && hover.id === 3 ? <MessageTools></MessageTools>: null}
                </MessageDiv>
                {/* */}
                <div>
                    <MessageDevider></MessageDevider>
                </div>
            </div>
            <DateMarkerDiv> {/* flex item */}
                <DateMarker>
                    Today
                    <span></span>
                </DateMarker>
            </DateMarkerDiv>
            <MessagesDiv> {/* flex item */}
                {/* Anna */}
                <MessageDiv 
                    onMouseEnter={(e) => {
                        mouseOver(e, 4);
                    }} 
                    onMouseLeave={(e) => {
                        mouseOut(e, 4);
                    }} >
                    <img src={user_ana} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Anna 13:47:
                        </ProfileName>
                        <MessageText>
                            Ok, thats absolutly perfect. What about different colour options, did you have any specific preferences?
                        </MessageText>
                    </Message>
                    {hover.isHovered && hover.id === 4 ? <MessageTools></MessageTools>: null}
                </MessageDiv>
                {/* Bob */}
                <MessageDiv 
                    onMouseEnter={(e) => {
                        mouseOver(e, 5);
                    }} 
                    onMouseLeave={(e) => {
                        mouseOut(e, 5);
                    }} >
                    <img src={user_bob} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Bob 13:47:
                        </ProfileName>
                        <MessageText>
                            Yes I really liked the blue and orange layout, what did the rest of the team think?
                        </MessageText>
                    </Message>
                    {hover.isHovered && hover.id === 5 ? <MessageTools></MessageTools>: null}
                </MessageDiv>
                {/* Anna */}
                <MessageDiv 
                    onMouseEnter={(e) => {
                        mouseOver(e, 6);
                    }} 
                    onMouseLeave={(e) => {
                        mouseOut(e, 6);
                    }} >
                    <img src={user_ana} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Anna 13:49:
                        </ProfileName>
                        <MessageText>
                            Acctually I think most people agreed, it was by far most popular choice.
                        </MessageText>
                    </Message>
                    {hover.isHovered && hover.id === 6 ? <MessageTools></MessageTools>: null}
                </MessageDiv>
                {/* Bob */}
                <MessageDiv 
                    onMouseEnter={(e) => {
                        mouseOver(e, 7);
                    }} 
                    onMouseLeave={(e) => {
                        mouseOut(e, 7);
                    }} >
                    <img src={user_bob} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Bob 14:08:
                        </ProfileName>
                        <MessageText>
                            Yeah let's go that then. Thanks Anna.
                        </MessageText>
                    </Message>
                    {hover.isHovered && hover.id === 7 ? <MessageTools></MessageTools>: null}
                </MessageDiv>
                {/* new */}
                <img src={new_frame} alt='new messages'></img>
                <div>
                    <MessageDevider></MessageDevider>
                </div>
                {/* Anna */}
                <MessageDiv 
                    onMouseEnter={(e) => {
                        mouseOver(e, 8);
                    }} 
                    onMouseLeave={(e) => {
                        mouseOut(e, 8);
                    }} >
                    <img src={user_ana} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Anna 14:06:
                        </ProfileName>
                        <MessageText>
                            Ok sure.
                        </MessageText>
                    </Message>
                    {hover.isHovered && hover.id === 8 ? <MessageTools></MessageTools>: null}
                </MessageDiv>
                {/* Peter */}
                <MessageDiv 
                    onMouseEnter={(e) => {
                        mouseOver(e, 9);
                    }} 
                    onMouseLeave={(e) => {
                        mouseOut(e, 9);
                    }} >
                    <img src={user_peter} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Peter 13:48:
                        </ProfileName>
                        <MessageText>
                            It's coming together really well. Colin is flying over from Atlanta next week so I'll ask him to come in and take a look?
                        </MessageText>
                    </Message>
                    {hover.isHovered && hover.id === 9 ? <MessageTools></MessageTools>: null}
                </MessageDiv>
                {/* Anna */}
                <MessageDiv 
                    onMouseEnter={(e) => {
                        mouseOver(e, 10);
                    }} 
                    onMouseLeave={(e) => {
                        mouseOut(e, 10);
                    }} >
                    <img src={user_ana} alt='user'></img>
                    <Message>
                        <ProfileName>
                            Anna 13:49:
                        </ProfileName>
                        <MessageText>
                            Ok great!
                        </MessageText>
                    </Message>
                    {hover.isHovered && hover.id === 10 ? <MessageTools></MessageTools>: null}
                </MessageDiv>
            </MessagesDiv>
        </MessagesContainer>
    )
}

export default Messages;