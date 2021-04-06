import React from 'react';
import { Header } from './Header';

// export default class HeaderContainer extends React.Component<any, any> {
//   render() {
//     return <Header />;
//   }
// }

export const HeaderContainer = ({ loginToggle, toggle }: any) => {
  return <Header loginToggle={loginToggle} toggle={toggle}></Header>;
};
