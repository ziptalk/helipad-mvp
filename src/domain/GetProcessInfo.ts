import firebase from '../service/FirebaseService';

let mock_newData: any = {
  assetId: 1,
  processInfo: [
    {
      title: 'Setup local bank account',
      status: 'pre',
      divider: true,
    },
    {
      title: 'Find laywer',
      status: 'pre',
      divider: true,
    },
    {
      title: 'Find mortgage lender',
      status: 'pre',
      divider: true,
    },
    {
      title: 'Find escrow company',
      status: 'pre',
      divider: true,
    },
    {
      title:
        'Inspection contingency, loan contingency, engineer survey schedulings',
      status: 'pre',
      divider: true,
    },
    {
      title: 'Inspection contingency',
      status: 'pre',

      divider: false,
    },
  ],
  dueDateInfo: {
    title: 'Due Date',
    content: 'April, 1st, 2021',
  },
};
export default class CheckProcessData {
  static async getProcessInfo(userId: string, assetId: string) {
    return await firebase.getProcessInfo(userId, assetId);
  }

  static makeProcessCategory(step: string) {
    if (Number(step) === 0) {
      return mock_newData.processInfo;
    }
    for (let i = 0; i < Number(step); i++) {
      mock_newData.processInfo[i].status = 'completed';
    }
    mock_newData.processInfo[step].status = 'progress';
    return mock_newData.processInfo;
  }
}
