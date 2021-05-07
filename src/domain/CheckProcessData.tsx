import firebase from '../service/FirebaseService';

/**
 * Process Component에서 step, length, divider check 메소드 제공하는 클래스
 *
 */
let mock_data: assetsProps = {
  assetId: 1,
  processInfo: [
    {
      id: 1,
      title: 'Setup local bank account',
      statusInfo: { step: 3, status: 'completed' },
    },
    {
      id: 2,
      title: 'Find laywer',
      statusInfo: { step: 3, status: 'completed' },
    },
    {
      id: 3,
      title: 'Find mortgage lender',
      statusInfo: { step: 2, status: 'progress' },
    },
    {
      id: 4,
      title: 'Find escrow company',
      statusInfo: { step: 1, status: 'not yet' },
    },
    {
      id: 5,
      title:
        'Inspection contingency, loan contingency, engineer survey schedulings',
      statusInfo: { step: 1, status: 'not yet' },
    },
    {
      id: 6,
      title: 'Inspection contingency',
      statusInfo: { step: 1, status: 'not yet' },
    },
  ],
  dueDateInfo: {
    title: 'Due Date',
    content: 'April, 1st, 2021',
  },
};
let mock_newData: any = {
  assetId: 1,
  processInfo: [
    '문의완료',
    'Setup local bank account',
    'Find laywer',
    'Find mortgage lender',
    'Find escrow company',
    'Inspection contingency, loan contingency, engineer survey schedulings',
    'Inspection contingency',
  ],
  dueDateInfo: {
    title: 'Due Date',
    content: 'April, 1st, 2021',
  },
};
type newProcessInfo = {
  processInfo: string[];
};
type newAssetsProps = {
  assetId: string;
  processInfo: newProcessInfo;
  dueDateInfo: {
    title: string;
    content: string;
  };
};
type ProcessInfo = {
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

export default class CheckProcessData {
  private information: assetsProps;
  private newInformation: newAssetsProps;
  constructor() {
    this.information = mock_data;
    this.newInformation = mock_newData;
  }

  public checkProcessStep(processInfo: ProcessInfo[]): boolean {
    let steps = processInfo.map((process) => process.statusInfo.step);
    let max: number = steps[0];
    for (let num of steps) {
      if (max < num) {
        return false;
      }
      max = num;
    }
    return true;
  }
  public newGetProcessInfo(props: any) {
    let step = props.processInfo.step;
    let status = props.processInfo.status;
  }

  public getProcessedInfo(props: assetsProps = this.information): assetsProps {
    let information = props.processInfo;

    if (!this.checkProcessStep(information)) {
      throw new Error('process 순서 에러');
    }

    let processInfo = information.map((info, idx) => {
      if (idx < information.length - 1) {
        return { ...info, divider: '|' };
      } else {
        return { ...info };
      }
    });
    console.log(processInfo);
    const returnedInfo = Object.assign({}, mock_data, { processInfo });
    return returnedInfo;
  }
}
