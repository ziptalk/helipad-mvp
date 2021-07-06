import * as React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import Summary from "../../../Asset/components/asset_detail/Summary";
import GetAsset from "../../../../domain/GetAsset";
import ProcessUseCase from "../../../../domain/GetProcess";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import ContactUseCase from "../../../../domain/ContactUseCase";
import { useContext, useEffect, useState } from "react";
import Asset from "../../../../model/Asset";
import Process from "../../../../model/Process";
import { ImNotification } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { Agent } from "http";

interface MatchParams {
    assetId: string;
}

const NormalUserProcess = ({ match }: RouteComponentProps<MatchParams>) => {
    let id = match.params.assetId;
  const { user } = useContext(AuthContext);
  const [asset, setAsset] = useState<Asset>(Asset.emptyAsset());
  const [processes, setProcesses] = useState<Process>(Process.emptyProcess());
  const [processLoad, setProcessLoad] = useState(false);
    // const [process, setProcess] = useState(
    //     {
    //         userId: "dlguswn3659@naver.com",
    //         assetId: "test_id_2",
    //         process: [
    //             {
    //                 task: [
    //                     {
    //                         description: "hello",
    //                         deadline: 29385049568283,
    //                         done: false,
    //                         day: 3,
    //                         agent: "HELIPAD"
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // )

  useEffect(() => {
    GetAsset.getAsset(id).then((value) => {
      setAsset(value);
      if (user != null) {
        ContactUseCase.getContactHistory(user.uid, value.agent).then(
          (value) => {
            console.log("get contact history");
          }
        );
      }
      window.scroll({ top: 0 });
    });

    if(user != null){
        ProcessUseCase.getProcess(user.uid, id).then((value) => {
            setProcesses(value);
            setProcessLoad(true);
            console.log("user hi!");
            window.scroll({top:0});
            console.log(value);
            {value.process.map((group) => {
                group.task.map((group2) => {
                    console.log(group2.description)
                })
            })}
        })
    }
  }, []);

  return (
      <>
        <Container>
            <Summary data={asset} />
            <DescriptionBox>
                <DescriptionTitle>CASH OFFER ESCROW PROCESS.</DescriptionTitle>
                <DescriptionTitle style={{fontWeight:400, color:"#B69142"}}>TYPICAL 30 DAYS</DescriptionTitle>
                <AnnounceBox>
                    <AnnounceSentence><ImNotification style={{marginRight:"7px", marginBottom:"-2px"}}/>ESCROW will have to be defined for Korean buyers</AnnounceSentence>
                    <AnnounceSentence><ImNotification style={{marginRight:"7px", marginBottom:"-2px"}}/>Need to come up with a good visual UX/UI to go down this checklist</AnnounceSentence>
                    <AnnounceSentence><ImNotification style={{marginRight:"7px", marginBottom:"-2px"}}/>this checklist will have to be customizable. E.g. some escrow may have 7 day contingency</AnnounceSentence>
                    <AnnounceSentence><ImNotification style={{marginRight:"7px", marginBottom:"-2px"}}/>Kaylee this doesn’t include the requirements of the Korean government/private banker</AnnounceSentence>
                </AnnounceBox>
            </DescriptionBox>
            <ProcessBox>
                {processLoad ? 
                    <>
                    {processes.process.map((group, index) => (
                        <>
                            <DayCircle>DAY {group.task[0].day.toString().padStart(2,'0')}</DayCircle>
                            {group.task.map((tasks, index2) => (
                                <>
                                    <TaskContainer>
                                        <SemiCircle />
                                        <SemiLine />
                                        {tasks.agent == "BUYER" ? <AgentBox style={{backgroundColor:"#3F8EB0"}}><CgProfile style={{marginRight:"3px"}}/><div>{tasks.agent}</div></AgentBox> : <>
                                        {tasks.agent == "HELIPAD" ? <AgentBox style={{backgroundColor:"#B69142"}}><CgProfile style={{marginRight:"3px"}}/><div>{tasks.agent}</div></AgentBox> : <AgentBox style={{backgroundColor:"#CE723E"}}><CgProfile style={{marginRight:"3px"}}/><div>{tasks.agent}</div></AgentBox>}
                                        </>}
                                        
                                        <div>{tasks.description.toString()}</div>
                                    </TaskContainer>
                                </>
                            ))}
                        </>
                    ))}
                    <DayCircle>END</DayCircle>
                    </>
                    :
                    <>
                    <div>waiting....</div>
                    </>
                }
            </ProcessBox>
        </Container>
      </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionBox = styled.div`
    margin: 50px;
    margin-left: 100px;
    margin-bottom: 30px;
`

const DescriptionTitle = styled.div`
    font-size: 40px;
    font-weight: 700;
`

const AnnounceBox = styled.div`
    margin-top: 30px;
`

const AnnounceSentence = styled.div`
    font-size: 12px;
    margin-bottom: 7px;
`

const ProcessBox = styled.div`
    margin: 0px;
    margin-left:180px;
    border-left: 1px solid black;
`

const DayCircle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: black;
    color: white;
    font-size: 11px;
    font-weight: 700;
    text-align: center;
    align-items: center;
    padding-top: 18px;
    margin-left: -26px;
`

const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 25px;
`

const SemiCircle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    border: 2px solid black;
    background-color: white;
    margin-left: -5.5px;
`

const SemiLine = styled.div`
    width: 10px;
    height: 1px;
    background-color: black;
`

const AgentBox = styled.div`
    display: flex;
    align-items: center;
    height: 18px;
    border-radius: 9px;
    color: white;
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    margin-right: 20px;
    padding-left: 10px;
    padding-right: 10px;
`

const ProcessLine = styled.div`
    width: 2px;
    // height: 100%;
    height: 100px;
    background-color: black;
    // position: absolute;
    // top: 530px;
    // left: 125px;
    position: relative;
    top: 20px;
    left: 25px;
    z-index: -1;
`

export default NormalUserProcess;
