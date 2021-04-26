import * as React from 'react';
import styled from 'styled-components';
import User from "../../../../model/User";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {MessageContainer} from "../../../../model/MessageContainer";

type ContactHistoryProps = {
    agent: User;
    messages: MessageContainer;
}

const ContactHistory = () => {
    const location = useLocation<ContactHistoryProps>();
    const [agent, setAgent] = useState<User>();
    const [messages, setMessages] = useState<MessageContainer>();

    useEffect(() => {
        setAgent(location.state.agent);
        setMessages(location.state.messages);
    }, [])

    return (
        <Container>
            <Title>ContactHistory</Title>
            {
                messages?.messages.map((message) => {
                    return (
                        <MessageSection>
                            <MessageContent>
                                {message.message}
                            </MessageContent>
                        </MessageSection>
                    )
                })
            }
        </Container>
    );
}

const Container = styled.div`
  width: 470px;
  
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 470px;
  text-align: center;
  font-size: 46px;
`;

const MessageSection = styled.div`
  
`;

const MessageContent = styled.div`
  font-size: 26px;
`;

export default ContactHistory;