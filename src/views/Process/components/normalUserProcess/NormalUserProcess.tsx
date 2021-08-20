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
import Long from "react";
import firebase from "firebase";
import DatePicker from "react-datepicker";
import { FiCalendar } from "react-icons/fi";
import { FcCheckmark } from "react-icons/fc";
import { BsCheck, BsFillTrashFill } from "react-icons/bs";
import { processStore } from "../../../../shared/Firebase";

import "react-datepicker/dist/react-datepicker.css";

interface MatchParams {
  assetId: string;
}

const NormalUserProcess = ({ match }: RouteComponentProps<MatchParams>) => {
  let id = match.params.assetId;
  const { user, setHeaderMode } = useContext(AuthContext);
  const [asset, setAsset] = useState<Asset>(Asset.emptyAsset());
  const [processes, setProcesses] = useState<Process>(Process.emptyProcess());
  const [processLoad, setProcessLoad] = useState(false);
  const [processError, setProcessError] = useState(false);
  const [hoverState, setHoverState] = useState([-1, -1]);
  const [editState, setEditState] = useState([-1, -1]);
  const [agent, setAgent] = useState("");
  const [description, setDescription] = useState("");
  const [done, setDone] = useState(false);
  const [deadline, setDeadline] = useState("");
  const [day, setDay] = useState(-1);
  const [today, setToday] = useState("");

  useEffect(() => {
    setHeaderMode("");
    //   if(id == 'test_id_2'){
    var d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    var resultDate = [year, month, day].join(".");
    setToday(resultDate);

    try {
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

      if (user != null) {
        ProcessUseCase.getProcess(user.uid, id).then((value) => {
          setProcesses(value);
          setProcessLoad(true);
          console.log("user hi!");
          window.scroll({ top: 0 });
          console.log(value);
          {
            value.process.map((group) => {
              group.task.map((group2) => {
                console.log(group2.description);
              });
            });
          }
          value.process.map((pro) => {
            pro.task.map((tasks) => {
              console.log(tasks.deadline);
            });
          });
        });
      }
    } catch (e) {
      console.log(e);
      setProcessError(true);
    }
    //   }
  }, []);

  const handleMouseHover = (day: number, task: number) => {
    setHoverState([day, task]);
    // console.log(day)
    // console.log(task)
  };

  const editButtonOnClick = () => {
    setDone(processes.process[hoverState[0]].task[hoverState[1]].done);
    let testValue =
      processes.process[hoverState[0]].task[hoverState[1]].deadline.toString();
    setEditState([hoverState[0], hoverState[1]]);
    setAgent(processes.process[hoverState[0]].task[hoverState[1]].agent);
    setDescription(
      processes.process[hoverState[0]].task[hoverState[1]].description
    );
    //   setDeadline(new Date(processes.process[hoverState[0]].task[hoverState[1]].deadline.toNumber()))
    if (testValue == "[object Object]") {
      testValue =
        processes.process[hoverState[0]].task[
          hoverState[1]
        ].deadline.seconds.toString();
      // setDeadline(new Date(parseInt(testValue)*1000))
      var d = new Date(parseInt(testValue) * 1000),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      var resultDate = [year, month, day].join(".");
      setDeadline(resultDate);
    } else {
      let startIndex = testValue.indexOf("=") + 1;
      let endIndex = testValue.indexOf(",");
      let result = testValue.substring(startIndex, endIndex);
      console.log(new Date(parseInt(result) * 1000));

      var d = new Date(parseInt(result) * 1000),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      var resultDate = [year, month, day].join(".");
      setDeadline(resultDate);
    }
    setDay(processes.process[hoverState[0]].task[0].day);
  };

  async function handleDoneOnChange() {
    setDone(!done);
    editFinishOnChange(!done);
  }

  const editFinishOnChange = (isDone: boolean) => {
    let thereIsSame = false;
    let tmpDataset = processes;
    let tmpDay = processes.process[editState[0]].task[0].day;
    let testValue =
      processes.process[hoverState[0]].task[hoverState[1]].deadline.toString();
    let tmpDeadline = new Date();
    setEditState([hoverState[0], hoverState[1]]);
    if (testValue == "[object Object]") {
      testValue =
        processes.process[hoverState[0]].task[
          hoverState[1]
        ].deadline.seconds.toString();
      tmpDeadline = new Date(parseInt(testValue) * 1000);
    } else {
      let startIndex = testValue.indexOf("=") + 1;
      let endIndex = testValue.indexOf(",");
      let result = testValue.substring(startIndex, endIndex);
      console.log(new Date(parseInt(result) * 1000));
      tmpDeadline = new Date(parseInt(result) * 1000);
    }
    let tmpTask = {
      agent: agent,
      deadline: firebase.firestore.Timestamp.fromDate(tmpDeadline),
      description: description,
      done: isDone,
      doneDate: firebase.firestore.Timestamp.fromDate(new Date()),
      day: day,
    };

    let removeTask = processes.process[editState[0]].task[editState[1]];

    if (day != tmpDay) {
      console.log(day);
      for (var i = 0; i < processes.process.length; i++) {
        if (day == processes.process[i].task[0].day) {
          tmpDataset.process[i].task.splice(0, 0, tmpTask);
          thereIsSame = true;
        }
      }
      if (thereIsSame == false) {
        let tmpProcess = {
          task: [tmpTask],
        };
        if (day < processes.process[0].task[0].day) {
          tmpDataset.process.splice(0, 0, tmpProcess);
          // tmpEditStatus1++
        } else if (
          day > processes.process[processes.process.length - 1].task[0].day
        ) {
          tmpDataset.process.push(tmpProcess);
        } else {
          for (var i = 0; i < processes.process.length - 1; i++) {
            if (
              day > processes.process[i].task[0].day &&
              day < processes.process[i + 1].task[0].day
            ) {
              tmpDataset.process.splice(i + 1, 0, tmpProcess);
            }
          }
        }
      }
      console.log(tmpDataset);

      for (var i = 0; i < tmpDataset.process.length; i++) {
        for (var j = 0; j < tmpDataset.process[i].task.length; j++) {
          if (tmpDataset.process[i].task[j] == removeTask) {
            tmpDataset.process[i].task.splice(j, 1);
            if (tmpDataset.process[i].task[0] == undefined) {
              tmpDataset.process.splice(i, 1);
            }
          }
        }
      }
      setProcesses(tmpDataset);
    } else {
      tmpDataset.process[editState[0]].task.splice(editState[1], 0, tmpTask);
      for (var i = 0; i < tmpDataset.process.length; i++) {
        for (var j = 0; j < tmpDataset.process[i].task.length; j++) {
          if (tmpDataset.process[i].task[j] == removeTask) {
            tmpDataset.process[i].task.splice(j, 1);
            if (tmpDataset.process[i].task[0] == undefined) {
              tmpDataset.process.splice(i, 1);
            }
          }
        }
      }
      console.log(tmpDataset);
      setProcesses(tmpDataset);
    }

    saveOnClick();
  };

  async function saveOnClick() {
    let thisRef = await (await processStore.doc(id).get()).data();
    console.log(thisRef);
    if (thisRef) {
      console.log(processes);
      console.log(typeof processes);
      await processStore.doc(id).set(JSON.parse(JSON.stringify(processes)));
      console.log("Save success!");
    } else {
      alert("Error!");
    }
  }

  return (
    <>
      <Container>
        <Summary data={asset} />
        {/* <SaveButton onClick={saveOnClick}>Save</SaveButton> */}
        <DescriptionBox>
          <DescriptionTitle>CASH OFFER ESCROW PROCESS.</DescriptionTitle>
          <DescriptionTitle style={{ fontWeight: 400, color: "#B69142" }}>
            TYPICAL 30 DAYS
          </DescriptionTitle>
          <AnnounceBox>
            <AnnounceSentence>
              <ImNotification
                style={{ marginRight: "7px", marginBottom: "-2px" }}
              />
              ESCROW will have to be defined for Korean buyers
            </AnnounceSentence>
            <AnnounceSentence>
              <ImNotification
                style={{ marginRight: "7px", marginBottom: "-2px" }}
              />
              Need to come up with a good visual UX/UI to go down this checklist
            </AnnounceSentence>
            <AnnounceSentence>
              <ImNotification
                style={{ marginRight: "7px", marginBottom: "-2px" }}
              />
              this checklist will have to be customizable. E.g. some escrow may
              have 7 day contingency
            </AnnounceSentence>
            <AnnounceSentence>
              <ImNotification
                style={{ marginRight: "7px", marginBottom: "-2px" }}
              />
              Kaylee this doesn’t include the requirements of the Korean
              government/private banker
            </AnnounceSentence>
          </AnnounceBox>
        </DescriptionBox>
        {processError ? (
          <></>
        ) : (
          <ProcessBox>
            {processLoad ? (
              <>
                {processes.process.map((group, index) => (
                  <>
                    {group.task[0] != undefined ? (
                      <>
                        <DayCircle>
                          DAY {group.task[0].day.toString().padStart(2, "0")}
                        </DayCircle>
                        {group.task.map((tasks, index2) => (
                          <>
                            {editState[0] == index && editState[1] == index2 ? (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    marginLeft: "-150px",
                                  }}
                                >
                                  <div
                                    style={{
                                      marginRight: "30px",
                                      marginTop: "-5px",
                                    }}
                                  >
                                    <TodayTag>TODAY</TodayTag>
                                    <div
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        color: "#F15524",
                                        textAlign: "right",
                                        marginRight: "-10px",
                                        marginTop: "17px",
                                      }}
                                    >
                                      {today}
                                    </div>
                                  </div>
                                  <EditContainer>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <div style={{ width: "80%" }}>
                                        <div style={{ display: "flex" }}>
                                          {tasks.agent == "BUYER" ? (
                                            <AgentBox
                                              style={{
                                                backgroundColor: "#3F8EB0",
                                                height: "28px",
                                                marginBottom: "15px",
                                              }}
                                            >
                                              <CgProfile
                                                style={{ marginRight: "3px" }}
                                              />
                                              <AgentInput>{agent}</AgentInput>
                                            </AgentBox>
                                          ) : (
                                            <>
                                              {tasks.agent == "HELIPAD" ? (
                                                <AgentBox
                                                  style={{
                                                    backgroundColor: "#B69142",
                                                    height: "28px",
                                                    marginBottom: "15px",
                                                  }}
                                                >
                                                  <CgProfile
                                                    style={{
                                                      marginRight: "3px",
                                                    }}
                                                  />
                                                  <AgentInput>
                                                    {agent}
                                                  </AgentInput>
                                                </AgentBox>
                                              ) : (
                                                <AgentBox
                                                  style={{
                                                    backgroundColor: "#CE723E",
                                                    height: "28px",
                                                    marginBottom: "15px",
                                                  }}
                                                >
                                                  <CgProfile
                                                    style={{
                                                      marginRight: "3px",
                                                    }}
                                                  />
                                                  <AgentInput>
                                                    {agent}
                                                  </AgentInput>
                                                </AgentBox>
                                              )}
                                            </>
                                          )}
                                        </div>

                                        <DescriptionInput>
                                          {description}
                                        </DescriptionInput>
                                        {/* <div>{tasks.description.toString()}</div> */}
                                        <DeadlineContainer>
                                          {done ? (
                                            <>
                                              <FiCalendar
                                                style={{
                                                  fontSize: "25px",
                                                  fontWeight: 100,
                                                  color: "#359545",
                                                }}
                                              />
                                              <div
                                                style={{
                                                  marginLeft: "16px",
                                                  color: "#359545",
                                                }}
                                              >
                                                <div
                                                  style={{ fontSize: "10px" }}
                                                >
                                                  Deadline
                                                </div>
                                                <div
                                                  style={{
                                                    fontSize: "16px",
                                                    fontWeight: 500,
                                                    marginTop: "-5px",
                                                  }}
                                                >
                                                  {deadline}
                                                </div>
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                              <FiCalendar
                                                style={{
                                                  fontSize: "25px",
                                                  fontWeight: 100,
                                                  color: "#F15524",
                                                }}
                                              />
                                              <div
                                                style={{
                                                  marginLeft: "13px",
                                                  color: "#F15524",
                                                }}
                                              >
                                                <div
                                                  style={{ fontSize: "10px" }}
                                                >
                                                  Deadline
                                                </div>
                                                <div
                                                  style={{
                                                    fontSize: "16px",
                                                    fontWeight: 500,
                                                    marginTop: "-5px",
                                                  }}
                                                >
                                                  {deadline}
                                                </div>
                                              </div>
                                            </>
                                          )}
                                        </DeadlineContainer>
                                      </div>
                                      <ButtonBoxContainer
                                        style={{
                                          textAlign: "right",
                                          marginLeft: "30%",
                                        }}
                                      >
                                        {!done ? (
                                          <BsCheck
                                            onClick={handleDoneOnChange}
                                            style={{
                                              fontSize: "90px",
                                              marginLeft: "20px",
                                              marginTop: "5px",
                                              width: "100%",
                                            }}
                                          />
                                        ) : (
                                          <BsCheck
                                            onClick={handleDoneOnChange}
                                            style={{
                                              fontSize: "90px",
                                              marginLeft: "20px",
                                              marginTop: "5px",
                                              width: "100%",
                                              color: "green",
                                            }}
                                          />
                                        )}
                                      </ButtonBoxContainer>
                                    </div>
                                  </EditContainer>
                                </div>
                              </>
                            ) : (
                              <TaskContainer
                                onClick={editButtonOnClick}
                                onMouseEnter={() =>
                                  handleMouseHover(index, index2)
                                }
                              >
                                <SemiCircle />
                                <SemiLine />
                                <div style={{ width: "123px" }}>
                                  {tasks.agent == "BUYER" ? (
                                    <AgentBox
                                      style={{ backgroundColor: "#3F8EB0" }}
                                    >
                                      <CgProfile
                                        style={{ marginRight: "3px" }}
                                      />
                                      <div>{tasks.agent}</div>
                                    </AgentBox>
                                  ) : (
                                    <>
                                      {tasks.agent == "HELIPAD" ? (
                                        <AgentBox
                                          style={{ backgroundColor: "#B69142" }}
                                        >
                                          <CgProfile
                                            style={{ marginRight: "3px" }}
                                          />
                                          <div>{tasks.agent}</div>
                                        </AgentBox>
                                      ) : (
                                        <AgentBox
                                          style={{ backgroundColor: "#CE723E" }}
                                        >
                                          <CgProfile
                                            style={{ marginRight: "3px" }}
                                          />
                                          <div>{tasks.agent}</div>
                                        </AgentBox>
                                      )}
                                    </>
                                  )}
                                </div>
                                {tasks.done ? (
                                  <>
                                    <div
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        color: "#359545",
                                        marginRight: "20px",
                                        width: "167px",
                                        textAlign: "left",
                                      }}
                                    >
                                      Completed
                                      {tasks.doneDate != undefined ? (
                                        <>
                                          {" " +
                                            [
                                              new Date(
                                                parseInt(
                                                  tasks.doneDate.seconds.toString()
                                                ) * 1000
                                              ).getFullYear(),
                                              ((
                                                new Date(
                                                  parseInt(
                                                    tasks.doneDate.seconds.toString()
                                                  ) * 1000
                                                ).getMonth() + 1
                                              ).toString().length < 2
                                                ? "0" +
                                                  (
                                                    new Date(
                                                      parseInt(
                                                        tasks.doneDate.seconds.toString()
                                                      ) * 1000
                                                    ).getMonth() + 1
                                                  ).toString()
                                                : new Date(
                                                    parseInt(
                                                      tasks.doneDate.seconds.toString()
                                                    ) * 1000
                                                  ).getMonth() + 1
                                              ).toString(),
                                              (new Date(
                                                parseInt(
                                                  tasks.doneDate.seconds.toString()
                                                ) * 1000
                                              )
                                                .getDate()
                                                .toString().length < 2
                                                ? "0" +
                                                  new Date(
                                                    parseInt(
                                                      tasks.doneDate.seconds.toString()
                                                    ) * 1000
                                                  )
                                                    .getDate()
                                                    .toString()
                                                : new Date(
                                                    parseInt(
                                                      tasks.doneDate.seconds.toString()
                                                    ) * 1000
                                                  ).getDate()
                                              ).toString(),
                                            ].join(".")}
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                <div
                                  style={{ fontSize: "18px", fontWeight: 400 }}
                                >
                                  {tasks.description.toString()}
                                </div>
                              </TaskContainer>
                            )}
                          </>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
                <DayCircle>END</DayCircle>
              </>
            ) : (
              <>
                <div>waiting....</div>
              </>
            )}
          </ProcessBox>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  margin: 0 auto;
  //   font-family: Poppins;
  //   font-weight: 900;
`;

const DescriptionBox = styled.div`
  max-width: 80vw;
  width: 100%;
  margin: 50px;
  margin-left: 100px;
  margin-bottom: 53px;
`;

const DescriptionTitle = styled.div`
  font-size: 60px;
  font-weight: 600;
`;

const AnnounceBox = styled.div`
  margin-top: 30px;
`;

const AnnounceSentence = styled.div`
  font-size: 18px;
  margin-bottom: 7px;
  font-weight: 400;
  max-width: 80vw;
  width: 100%;
`;

const ProcessBox = styled.div`
  margin: 0px;
  margin-left: 230px;
  border-left: 1px solid black;
  margin-bottom: 100px;
`;

const DeadlineContainer = styled.div`
  display: flex;
  color: red;
  align-items: center;
`;

const DayCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #212121;
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  align-items: center;
  padding-top: 28px;
  margin-left: -41px;
`;

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const SemiCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 2px solid black;
  background-color: white;
  margin-left: -5.5px;
`;

const AddCircle = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid black;
  background-color: white;
  margin-left: -20px;
  font-size: 30px;
`;

const SemiLine = styled.div`
  width: 10px;
  height: 1px;
  background-color: black;
`;

const AgentBox = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  width: fit-content;
  border-radius: 14px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  // margin-right: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;
const SaveButton = styled.button`
  position: fixed;
  bottom: 170px;
  right: 30px;
  height: 60px;
  width: fit-content;
  font-size: 20px;
  background-color: #b69142;
  border-radius: 30px;
  border: 0;
`;

const AgentInput = styled.div`
  // width: 80px;
  font-size: 14px;
  background-color: transparent;
  color: white;
  font-weight: 500;
`;

const DescriptionInput = styled.div`
  width: 100%;
  font-size: 18px;
  margin-bottom: 10px;
`;

const EditContainer = styled.div`
  width: 80%;
  // margin-left: -30px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 2px solid black;
  background-color: white;
  padding: 40px;
`;

const ButtonBoxContainer = styled.div`
  width: 20%;
  height: 100%;
`;

const TodayTag = styled.div`
  background: #f15524;
  color: white;
  text-align: center;
  align-items: center;
  display: inline-block;
  height: 28px;
  margin-left: 20px;
  margin-top: 55px;
  position: relative;
  width: 72px;
  border-radius: 4px;
  font-size: 14px;
  padding-top: 4px;
  font-weight: 500;
  &:before {
    border-bottom: 14px solid transparent;
    border-left: 10px solid #f15524;
    border-top: 14px solid transparent;
    content: "";
    height: 0;
    left: 70px;
    position: absolute;
    top: 0px;
    width: 0;
    border-radius: 4px;
  }
`;

export default NormalUserProcess;
