import { useEffect, useContext } from "react";
import { AuthContext } from "../../../router/config/Provider/AuthProvider";
const AboutUs = () => {
  const { setHeaderMode } = useContext(AuthContext);
  useEffect(() => {
    setHeaderMode("black");
  });
  return <h3>컨텐츠 준비중입니다..</h3>;
};
export default AboutUs;
