import React, { useState, useEffect } from "react";
import ProcessDetailPresenter from "./ProcessDetailPresenter";
import GetProcessInfo from "../../../../domain/GetProcessInfo";
type ProcessInfo = {
  divider?: string;
  id: number;
  title: string;
  statusInfo: { step: number; status: string };
};

type assetsProps = {
  assetId: number;
  processInfo: ProcessInfo[];
  dueDateInfo: {
    title: string;
    content: string;
  };
};
type DayOneToThree = {
  earnestMoney?: boolean;
  orderTitleReport?: boolean;
};
type DayOneToSeventeen = {
  inspection?: string[];
  removeContingencies?: boolean;
  repairs?: boolean;
  escrowPaper?: boolean;
  titleReport?: boolean;
  homeWarranty?: boolean;
};
const ProcessDetailContainer = ({ contactInfo }: any) => {
  let { userEmail, assetId } = contactInfo;
  console.log(userEmail, assetId);
  let [dueDateInfo, setDueDateInfo] = useState({ title: "", content: "" });
  let [processList, setProcessList] = useState<any[]>();
  const [dayOneToThree, setDayOneToThree] = useState<DayOneToThree>();
  const [inspection, setInspection] = useState<string[]>([]);
  let [dayOneToSeventeen, setDayOneToSeventeen] = useState<DayOneToSeventeen>({
    removeContingencies: false,
    repairs: false,
    escrowPaper: false,
    titleReport: false,
    homeWarranty: false,
  });
  const [daySeventeen, setDaySeventeen] = useState(false);
  const [dayTwentyFive, setDayTwentyFive] = useState(false);
  const [dayTwentySix, setDayTwentySix] = useState({
    closingFunds: false,
    setUpLLC: false,
  });
  const [dayTwentySeven, setDayTwentySeven] = useState(false);
  const [dayTwentyEight, setDayTwentyEight] = useState(false);
  const [dayThirty, setDayThirty] = useState({
    confirmRecording: false,
    receiveKey: false,
  });

  useEffect(() => {
    GetProcessInfo.getProcessInfo(userEmail, assetId).then((resolve) => {
      let step = resolve.step;
      let { title, content } = resolve.dueDate;
      let processList = GetProcessInfo.makeProcessCategory(step);
      setDueDateInfo({ title, content });
      setProcessList(processList);
    });
  }, []);

  const handleDayOneToThree = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setDayOneToThree({
      ...dayOneToThree,
      [name]: checked,
    });
  };
  const handleInspection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setInspection([...inspection, value]);
    } else {
      let newInspection = inspection.filter((ele) => ele !== value);
      setInspection(newInspection);
    }
  };
  const handleDayOneToSeventeen = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;

    setDayOneToSeventeen({
      ...dayOneToSeventeen,
      [name]: checked,
    });
  };
  const handleDaySeventeen = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setDaySeventeen(checked);
  };
  const handleDayTwentyFive = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setDayTwentyFive(checked);
  };

  const handleDayTwentySix = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setDayTwentySix({ ...dayTwentySix, [name]: checked });
  };

  const handleDayTwentySeven = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setDayTwentySeven(checked);
  };

  const handleDayTwentyEight = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setDayTwentyEight(checked);
  };

  const handleDayThirty = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setDayThirty({ ...dayThirty, [name]: checked });
  };

  const onCompleteProcess = (e: any) => {
    let result = {
      dayOneToThree,
      inspection,
      dayOneToSeventeen,
      daySeventeen,
      dayTwentyFive,
      dayTwentySix,
      dayTwentySeven,
      dayTwentyEight,
      dayThirty,
    };
    console.log("result:", result);
  };

  return (
    <ProcessDetailPresenter
      handleDayOneToThree={handleDayOneToThree}
      handleInspection={handleInspection}
      handleDayOneToSeventeen={handleDayOneToSeventeen}
      handleDaySeventeen={handleDaySeventeen}
      handleDayTwentyFive={handleDayTwentyFive}
      handleDayTwentySix={handleDayTwentySix}
      handleDayTwentySeven={handleDayTwentySeven}
      handleDayTwentyEight={handleDayTwentyEight}
      handleDayThirty={handleDayThirty}
      onCompleteProcess={onCompleteProcess}
    />
  );
};
export default ProcessDetailContainer;
