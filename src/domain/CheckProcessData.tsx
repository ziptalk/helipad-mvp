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
  constructor() {
    this.information = mock_data;
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

// public checkProcessStep(processInfo: ProcessInfo[]): boolean {
//   let steps = processInfo.map((process) => process.statusInfo.step);
//   let max: number = steps[0];
//   for (let num of steps) {
//     if (max < num) {
//       return false;
//     }
//     max = num;
//   }
//   return true;
// }

// public getProcessedInfo(props: assetsProps = this.information): any {
//   let information = props.processInfo;

//   if (!this.checkProcessStep(information)) {
//     console.log('process 상 오류 발생');
//   }

//   let processedInfo = information.map((info: any) => {
//     let head = 0;
//     let tail = 0;
//     let result = [];
//     let title = info.title;

//     while (title.indexOf(',') > -1) {
//       tail = title.indexOf(',');
//       result.push(title.slice(head, tail + 1));
//       title = title.slice(tail + 2);
//     }
//     result.push(title);
//     return result;
//   });

//   return processedInfo;
// }
