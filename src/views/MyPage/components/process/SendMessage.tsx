import styled from 'styled-components';
export const SendMessage = () => {
  const onSend = () => {
    console.log('Send to agent');
  };
  return <Send onClick={onSend}>Send to helipad</Send>;
};
const Send = styled.button`
  text-align: center;
  background: #4542e2;
  color: #ffffff;
  font-size: 20px;
  margin-top: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 20%;
  cursor: pointer;
`;
