import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {MessageContainer} from "../../../../model/MessageContainer";
import User from "../../../../model/User";
import GetUserInfo from "../../../../domain/GetUserInfo";
import {Link} from "react-router-dom";

type ContactHistoryProps = {
    data: MessageContainer
}

const ContactHistoryCard = ({ data }: ContactHistoryProps) => {

    const [agent, setAgent] = useState<User>();

    useEffect(() => {
       GetUserInfo.execute(data.agent).then((user) => {
           setAgent(user);
       }).catch((error) => {
           // handle error
       });
    });

    return (
        <Link to={{
            pathname: "/contact",
            state: {
                agent: agent,
                messages: data
            }
        }}>
            <Container>
                Contacts with Agent {agent?.firstName} {agent?.lastName}
            </Container>
        </Link>
    );
}

const Container = styled.div`
  width: 470px;
  height: 353px;
  
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  
  padding: 10px;
`;

export default ContactHistoryCard;
