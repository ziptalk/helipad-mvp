import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import { userStore, firebase } from "../../../../shared/Firebase";
import { useHistory } from "react-router-dom";


const Account = () => {
    const { user } = useContext(AuthContext);
  const [savedSearchOften, setSaveSearchOften] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [fixedFirstName, setFixedFirstName] = useState('');
  const [fixedLastName, setFixedLastName] = useState('');
  const [fixedPhone, setFixedPhone] = useState('phone');
  const history = useHistory();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function getUserInfo() {
    if (user) {
      let contacts = await userStore.doc(user.uid.toString()).get();
      console.log(contacts);
      if (!contacts) {
        console.log("No such document!");
      } else {
        let dataResult = contacts.data();
        if (dataResult) {
          if (dataResult.isAgent != undefined) {
            console.log(dataResult.isAgent);
            setFixedFirstName(dataResult.firstName)
            setFixedLastName(dataResult.lastName)
            if(dataResult.phone){
                setFixedPhone(dataResult.phone)
            }
            if(dataResult.searchNotifications){
                if(dataResult.searchNotifications == 'Immediately'){
                    setSaveSearchOften(0)
                }else if(dataResult.searchNotifications == 'Daily'){
                    setSaveSearchOften(1)
                }else{
                    setSaveSearchOften(2)
                }
            }
            setEmail(dataResult.email);
          }
        }
        console.log("Document data:", contacts.data());
      }
    }
  }
  
  useEffect(() => {
    if (user) {
      getUserInfo();
    }
  }, [user]);

  async function oftenSaveOnClick(){
      if(user){
          let searchNotifications = ''
          if(savedSearchOften == 0){
              searchNotifications = 'Immediately'
          }else if(savedSearchOften == 1){
              searchNotifications = 'Daily'
          }else{
              searchNotifications = 'Never'
          }
          let contacts = await userStore.doc(user.uid.toString());
          if(!contacts){
              alert("Something wrong!")
          }else{
              contacts.update({
                  searchNotifications: searchNotifications
              }).then(()=>{
                alert('Save Successfully!')
                window.location.reload()
            })
                .catch(()=>(alert('Something wrong!')))
            }
      }
  }

  async function saveOnClick () {
      if (user) {
          let firstNameTmp = fixedFirstName
          let lastNameTmp = fixedLastName
          let phoneTmp = fixedPhone
        if(firstName != ''){
            firstNameTmp = firstName
        }
        if(lastName != ''){
            lastNameTmp = lastName
        }
        if(phone != ''){
            phoneTmp = phone
        }
          let contacts = await userStore.doc(user.uid.toString());
          if(!contacts) {
              alert("Something wrong!")
          }else{
              
              contacts.update({
                  firstName: firstNameTmp,
                  lastName: lastNameTmp,
                  phone: phoneTmp
              }).then(()=>{
                  alert('Save Successfully!')
                  window.location.reload()
            })
              .catch(()=>(alert('Something wrong!')))
          }
      }
  }

  const signOutOnclick = () => {
    history.push("/auth/logout");
  }

  const handleFirstName = (e: any) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e: any) => {
      setLastName(e.target.value)
  }

  const handlePhone = (e: any) => {
      setPhone(e.target.value)
  }

  const handleCurrentPassword = (e: any) => {
      setCurrentPassword(e.target.value)
  }

  const handleNewPassword = (e: any) => {
      setNewPassword(e.target.value)
  }

  const handleConfirmPassword = (e: any) => {
      setConfirmPassword(e.target.value)
  }

  const reauthenticate = (currentPassword: any) => {
    var user = firebase.auth().currentUser;
    if(user){
        if(user.email){
            console.log(user.email)
            var cred = firebase.auth.EmailAuthProvider.credential(
                user.email, currentPassword);
            return user.reauthenticateWithCredential(cred);
        }else{
            return (null)
        }
    }else{
        return (null)
    }
  }

  const changePassword = (currentPassword: any, newPassword: any) => {
      if(currentPassword){
          if(newPassword == confirmPassword){
              reauthenticate(currentPassword)?.then(() => {
                var user = firebase.auth().currentUser;
                if(user){
                user.updatePassword(newPassword).then(() => {
                    console.log("Password updated!");
                    alert("Password updated!")
                    window.location.reload()
                    }).catch((error) => { console.log(error); });
                }
            }).catch((error) => { 
                console.log(error); 
                alert("The current password is invalid or the user does not have a password.") 
            }); 
        }else{
            alert("Password is different! Please check the confirm password again.")
        }
      }
  }

  return (
    <Container>
      <AccountTitle>ACCOUNT</AccountTitle>
      <InputContainer>
        <InputHalfBox>
          <InputBox>
            <BoxTitle>Profile</BoxTitle>
            <div style={{ display: "flex" }}>
              <InputIndividualBox
                placeholder={fixedFirstName}
                value={firstName}
                onChange={handleFirstName}
                style={{ marginRight: "10px" }}
              />
              <InputIndividualBox
                placeholder={fixedLastName}
                value={lastName}
                onChange={handleLastName}
                style={{ marginLeft: "10px" }}
              />
            </div>
            <InputIndividualBox
              placeholder={email}
              value={email}
              style={{ backgroundColor: "#F4F4F4" }}
            />
            <InputIndividualBox value={phone} onChange={handlePhone} placeholder={fixedPhone} />
            <SaveButton onClick={saveOnClick}>Save</SaveButton>
          </InputBox>

          <InputBox>
            <BoxTitle>Change password</BoxTitle>
            <SubTitle>Current Password</SubTitle>
            <InputIndividualBox value={currentPassword} onChange={handleCurrentPassword} placeholder="********" />
            <SubTitle>New Password</SubTitle>
            <InputIndividualBox value={newPassword} onChange={handleNewPassword} placeholder="********" />
            <SubTitle>Confirm Password</SubTitle>
            <InputIndividualBox value={confirmPassword} onChange={handleConfirmPassword} placeholder="********" />
            <SaveButton onClick={()=>changePassword(currentPassword, newPassword)}>Save</SaveButton>
          </InputBox>
        </InputHalfBox>

        <InputHalfBox>
          <InputBox>
            <BoxTitle>My Agent</BoxTitle>
            <div style={{ display: "flex" }}>
              <Description>You aren't connected to any agents yet.</Description>
              <LinkComment>Browse agents.</LinkComment>
            </div>
          </InputBox>
          <InputBox>
            <BoxTitle>Default Saved Search Notifications</BoxTitle>
            <Description>
              How often would you like to receive updates on future Saved
              Searches?
            </Description>
            <div
              style={{
                display: "flex",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              {savedSearchOften == 0 ? (
                <DoneCheckBox />
              ) : (
                <CheckBox onClick={() => setSaveSearchOften(0)} />
              )}
              <CheckboxItem style={{ height: "24px" }}>
                Immediately
              </CheckboxItem>
            </div>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              {savedSearchOften == 1 ? (
                <DoneCheckBox />
              ) : (
                <CheckBox onClick={() => setSaveSearchOften(1)} />
              )}
              <CheckboxItem style={{ height: "24px" }}>Daily</CheckboxItem>
            </div>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              {savedSearchOften == 2 ? (
                <DoneCheckBox />
              ) : (
                <CheckBox onClick={() => setSaveSearchOften(2)} />
              )}
              <CheckboxItem style={{ height: "24px" }}>Never</CheckboxItem>
            </div>
            <SaveButton onClick={oftenSaveOnClick}>Save</SaveButton>
          </InputBox>
          <InputBox>
            <BoxTitle>Delete Account</BoxTitle>
            <Description>
              Once you delete your Helipad Account, it cannot be reactivated.
            </Description>
            <DeleteButton>Delete your account</DeleteButton>
          </InputBox>
          <InputBox>
            <BoxTitle>Sign Out</BoxTitle>
            <Description>
              If you Sign out, you can sign back in anytime.
            </Description>
            <SaveButton onClick={signOutOnclick} style={{ marginTop: "20px" }}>Sign Out</SaveButton>
          </InputBox>
        </InputHalfBox>
      </InputContainer>
    </Container>
  );
};
const Container = styled.div`
  max-width: 1904px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AccountTitle = styled.div`
  text-align: center;
  margin-bottom: 26px;
  margin-top: 46px;
  font-size: 48px;
  font-weight: 600;
  color: #212121;
  width: 100%;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 32px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
`;

const InputHalfBox = styled.div`
  /* width: 727px; */
  // padding: 32px;
  margin: 14px;
  // background-color: white;
  flex: 1;
`;
const InputBox = styled.div`
  width: 100%;
  padding: 32px;
  background-color: white;
  margin-bottom: 28px;
`;

const BoxTitle = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 14px;
  border-bottom: 1px solid #9a9a9a;
  margin-bottom: 20px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 14px;
  }
`;

const InputIndividualBox = styled.input`
  width: 100%;
  height: 56px;
  padding: 16px;
  // border: 1px solid #B69142;
  border: 1px solid #eaeaea;
  margin-bottom: 10px;
  font-size: 16px;
  color: #212121;
  font-family: Poppins;
  &:focus {
    outline: 1px solid #b69142;
  }
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 12px;
    height: 45px;
  }
`;

const SaveButton = styled.button`
  width: 25%;
  border: 1px solid #212121;
  font-size: 18px;
  font-weight: 600;
  margin-top: 10px;
  height: 56px;
  background-color: white;
  font-family: Poppins;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 13px;
    height: 35px;
    width: 25%;
  }
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: #666666;
  height: 24px;
  margin-bottom: 6px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 13px;
  }
`;

const Description = styled.div`
  font-size: 16px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 11px;
  }
`;

const LinkComment = styled.div`
  font-size: 16px;
  color: #b69142;
  margin-left: 5px;
  text-decoration: underline;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 11px;
  }
`;

const CheckBox = styled.button`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border-radius: 12px;
  border: 1px solid #eaeaea;
  background-color: white;
`;
const CheckboxItem = styled.div`
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 12px;
  }
`;
const DoneCheckBox = styled.button`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border-radius: 12px;
  border: 6px solid #b69142;
  background-color: white;
`;

const DeleteButton = styled.button`
  width: 40%;
  border: 0;
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
  height: 56px;
  background-color: #f15524;
  font-family: Poppins;
  color: white;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 12px;
    width: 45%;
    height: 37px;
  }
`;

export default Account;
