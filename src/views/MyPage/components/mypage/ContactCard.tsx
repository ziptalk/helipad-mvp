import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {MessageContainer} from "../../../../model/MessageContainer";
import User from "../../../../model/User";
import GetUserInfo from "../../../../domain/GetUserInfo";
import {Link} from "react-router-dom";
import AgentIcon from "../../../../images/ic_agent.svg";
import {storageRef} from "../../../../shared/Firebase";

type ContactHistoryProps = {
    data: MessageContainer
}

const ContactHistoryCard = ({ data }: ContactHistoryProps) => {

    const [agent, setAgent] = useState<User>();
    const [agentThumbnailUrl, setAgentThumbnailUrl] = useState<string>();

    useEffect(() => {
       GetUserInfo.execute(data.agent).then((user) => {
           setAgent(user);
           // move this to firebase-service
       }).catch((error) => {
           // handle error
       });
    });

    useEffect(() => {
        storageRef.child('images/ic_terra_ark.png')
            .getDownloadURL()
            .then((downloadUrl) => {
                console.log("set download url : " + downloadUrl);
                setAgentThumbnailUrl(downloadUrl);
            });
    }, []);

    return (
        <Link to={{
            pathname: "/contact",
            state: {
                agent: agent,
                messages: data
            }
        }}>
            <Container background={data.asset.buildingInformation.thumbnail}>
                <Gradient>
                    <Content>
                        <div>
                            {data.asset.buildingInformation.address}
                        </div>
                        <AgentThumbnail background={agentThumbnailUrl}/>
                    </Content>
                    <Footer>
                        {data.agent}
                    </Footer>
                </Gradient>
            </Container>
        </Link>
    );
}

const Container: any = styled.div`
  width: 470px;
  height: 353px;
  
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  
  background: url(${(props: any) => props.background});
  background-size: cover;
  text-decoration: none;
  align-items: end;
`;

const Gradient = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(
      180deg,
      rgba(120, 120, 120, 0) 48.36%,
      rgba(0, 0, 0, 0.5) 64.52%,
      #000000 100%
    );
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  color: #ffffff;
  font-size: 25px;
  padding-left: 20px;
  padding-right: 20px;
`;

const AgentThumbnail: any = styled.div`
  width: 106px;
  height: 106px;
  background: url(${(props: any) => props.background});
  background-size: cover;
`;

const Footer = styled.div`
  color: #ffffff;
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

export default ContactHistoryCard;
