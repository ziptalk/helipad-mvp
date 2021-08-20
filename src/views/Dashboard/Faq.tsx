import { useEffect } from "react";
const Faq = ({ setDashboardPage }: any) => {
  useEffect(() => {
    setDashboardPage(true);
    return () => {
      setDashboardPage(false);
    };
  }, []);
  return <div>Faq</div>;
};
export default Faq;
