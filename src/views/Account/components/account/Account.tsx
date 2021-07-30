import styled from "styled-components";
import { useState, useEffect, useContext } from "react";

const Account = () => {
    const [savedSearchOften, setSaveSearchOften] = useState(0);

    return(
        <div>
            <AccountTitle>ACCOUNT</AccountTitle>
            <InputContainer>
                <InputHalfBox>
                    <InputBox>
                        <BoxTitle>Profile</BoxTitle>
                        <div style={{display:"flex"}}>
                            <InputIndividualBox placeholder="Blake" style={{marginRight:"10px"}}/>
                            <InputIndividualBox placeholder="Park" style={{marginLeft:"10px"}}/>
                        </div>
                        <InputIndividualBox placeholder="Black@teraark.com" style={{backgroundColor:"#F4F4F4"}}/>
                        <InputIndividualBox placeholder="Phone"/>
                        <SaveButton>Save</SaveButton>
                    </InputBox>

                    <InputBox>
                        <BoxTitle>Chang password</BoxTitle>
                        <SubTitle>Current Password</SubTitle>
                        <InputIndividualBox placeholder="********"/>
                        <SubTitle>New Password</SubTitle>
                        <InputIndividualBox placeholder="********"/>
                        <SubTitle>Confirm Password</SubTitle>
                        <InputIndividualBox placeholder="********"/>
                        <SaveButton>Save</SaveButton>
                    </InputBox>
                </InputHalfBox>

                <InputHalfBox>
                    <InputBox>
                        <BoxTitle>My Agent</BoxTitle>
                        <div style={{display:"flex"}}>
                            <Description>You aren't connected to any agents yet.</Description>
                            <LinkComment>Browse agents.</LinkComment>
                        </div>
                    </InputBox>
                    <InputBox>
                        <BoxTitle>Default Saved Search Notifications</BoxTitle>
                        <Description>How often would you like to receive updates on future Saved Searches?</Description>
                        <div style={{display:"flex", marginBottom:"10px", marginTop:"20px"}}>
                            {savedSearchOften == 0 ? <DoneCheckBox /> : <CheckBox onClick={()=>setSaveSearchOften(0)}/>}
                            <div style={{height:"24px"}}>Immediately</div>
                        </div>
                        <div style={{display:"flex", marginBottom:"10px"}}>
                            {savedSearchOften == 1 ? <DoneCheckBox /> : <CheckBox onClick={()=>setSaveSearchOften(1)}/>}
                            <div style={{height:"24px"}}>Daily</div>
                        </div>
                        <div style={{display:"flex", marginBottom:"10px"}}>
                            {savedSearchOften == 2 ? <DoneCheckBox /> : <CheckBox onClick={()=>setSaveSearchOften(2)}/>}
                            <div style={{height:"24px"}}>Never</div>
                        </div>
                        <SaveButton>Save</SaveButton>
                    </InputBox>
                    <InputBox>
                        <BoxTitle>Delete Account</BoxTitle>
                        <Description>Once you delete your Helipad Account, it cannot be reactivated.</Description>
                        <DeleteButton>Delete your account</DeleteButton>
                    </InputBox>
                    <InputBox>
                        <BoxTitle>Sign Out</BoxTitle>
                        <Description>If you Sign out, you can sign back in anytime.</Description>
                        <SaveButton style={{marginTop:"20px"}}>Sign Out</SaveButton>
                    </InputBox>
                </InputHalfBox>
            </InputContainer>
        </div>
    )
}

const AccountTitle = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 26px;
    margin-top: 46px;
    font-size: 48px;
    font-weight: 600;
    color: #212121;
`

const InputContainer = styled.div`
    display: flex;
    font-family: Poppins;
`

const InputHalfBox = styled.div`
    width: 727px;
    // padding: 32px;
    margin: 14px;
    // background-color: white;
`
const InputBox = styled.div`
    width: 100%;
    padding: 32px;
    background-color: white;
    margin-bottom: 28px;
`

const BoxTitle = styled.div`
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 14px;
    border-bottom: 1px solid #9A9A9A;
    margin-bottom: 20px;
`

const InputIndividualBox = styled.input`
    width: 100%;
    height: 56px;
    padding: 16px;
    // border: 1px solid #B69142;
    border: 1px solid #EAEAEA;
    margin-bottom: 10px;
    font-size: 16px;
    color: #212121;
    font-family: Poppins;
    &:focus {
        outline:1px solid #B69142;
    }
`

const SaveButton = styled.button`
    width: 25%;
    border: 1px solid #212121;
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
    height: 56px;
    background-color: white;
    font-family: Poppins;
`

const SubTitle = styled.div`
    font-size: 14px;
    color: #666666;
    height: 24px;
    margin-bottom: 6px;
`

const Description = styled.div`
    font-size: 16px;
`

const LinkComment = styled.div`
    font-size: 16px;
    color: #B69142;
    margin-left: 5px;
    text-decoration: underline;
`

const CheckBox = styled.button`
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border-radius: 12px;
    border: 1px solid #EAEAEA;
    background-color: white;
`

const DoneCheckBox = styled.button`
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border-radius: 12px;
    border: 6px solid #B69142;
    background-color: white;
`

const DeleteButton = styled.button`
    width: 40%;
    border: 0;
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
    height: 56px;
    background-color: #F15524;
    font-family: Poppins;
    color: white;
`

export default Account;