import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import useCollapse from "react-collapsed";
import ContactUseCase from "../../../../domain/ContactUseCase";
import { BsChevronDown, BsArrowRight, BsChevronUp } from "react-icons/bs";
import { GoCheck } from "react-icons/go";


const Contact = () => {
    const [savedSearchOften, setSaveSearchOften] = useState(0);
    // const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [regard, setRegard] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');

    const regardingList = ['Buying', 'Renting', 'Selling', 'Property Management', 'Other']

    const handleName = (event: any) => {
        setName(event.target.value)
    };

    const handleEmail = (event: any) => {
        setEmail(event.target.value)
    };

    const handleRegard = (value: string) => {
        setRegard(value)
        setExpanded(false)
    };

    const handlePhone = (event: any) => {
        setPhone(event.target.value)
    };

    const handleMessage = (event: any) => {
        setMessage(event.target.value)
    };

    const sendButtonOnClick = async () => {
        if(name != '' && email != '' && regard != '' && message != ''){
            ContactUseCase.contactUsSend(
                name,
                email,
                regard,
                phone,
                message,
                new Date()
            ).then((value) => {
                console.log("success");
                console.log(value);
                alert("Successfully sent. We'll get back to you right away.");
                window.location.reload()

            })
            .catch((err) => console.log(err));
        }
        else{
            alert("There is something missing. Please check again.")
        }
      };

    return(
        <div>
            <AccountTitle>Contact us with a question or concern</AccountTitle>
            <InputContainer>
                <InputHalfBox>
                    <InputBox>
                        <div style={{display:"flex"}}>
                            <div style={{width:"100%"}}><SemiTitle style={{marginRight:"10px"}}>Name</SemiTitle>
                            <InputIndividualBox placeholder="Name" value={name} onChange={handleName} style={{marginRight:"10px"}}/></div>
                            <div style={{width:"100%"}}><SemiTitle style={{marginLeft:"10px"}}>Email</SemiTitle>
                            <InputIndividualBox placeholder="email" value={email} onChange={handleEmail} style={{marginLeft:"10px"}}/></div>
                        </div>
                        <div style={{display:"flex"}}>
                            <div style={{width:"100%"}}><SemiTitle style={{marginRight:"10px"}}>What is this regarding?</SemiTitle>
                                <div style={{position: "relative"}} {...getToggleProps({
                                    onClick: () => setExpanded((prevExpanded) => !prevExpanded)
                                })}>
                                    <InputIndividualBox placeholder="Select ..." value={regard} style={{marginRight:"10px"}}/>
                                    <ArrowBox>
                                        {isExpanded ? (
                                            <BsChevronUp style={{ width: "24px", height: "24px" }} />
                                        ) : (
                                            <BsChevronDown style={{ width: "24px", height: "24px", color:"#8D8D8D" }} />
                                        )}
                                    </ArrowBox>
                                </div>
                                <section {...getCollapseProps()}>
                                    <div style={{backgroundColor:"#FFFFFF"}}>
                                        {regardingList.map(value => (
                                            <div style={{position: "relative"}}>
                                                <SelectList onClick={()=>handleRegard(value)}>{value}</SelectList>
                                                {value == regard ? <ArrowBox>
                                                <GoCheck style={{ width: "24px", height: "24px"}}/>
                                                </ArrowBox> : <></>}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                            <div style={{width:"100%"}}><SemiTitle style={{marginLeft:"10px"}}>Phone (optional)</SemiTitle>
                            <InputIndividualBox placeholder="Phone" value={phone} onChange={handlePhone} style={{marginLeft:"10px"}}/></div>
                        </div>
                        <SemiTitle>Message</SemiTitle>
                        <TextArea placeholder="Please leave a message." value={message} onChange={handleMessage}/>
                        <SaveButton onClick={()=>sendButtonOnClick()}>Send Message</SaveButton>
                    </InputBox>
                </InputHalfBox>
            </InputContainer>
        </div>
    )
}

const SelectList = styled.button`
    width: 100%;
    border: 0;
    border-bottom: 1px solid white;
    background-color: transparent;
    font-size: 16px;
    text-align: left;
    height: 56px;
    padding: 16px;
    position: relative;
`

const ArrowBox = styled.div`
    position: absolute;
    right: 10px;
    top: 16px;
    font-weight: bold;
    font-style: bold;
`

const AccountTitle = styled.div`
    width: 100%;
    text-align: left;
    margin-bottom: 54px;
    margin-top: 60px;
    font-size: 24px;
    font-weight: bold;
    color: #212121;
`

const InputContainer = styled.div`
    display: flex;
    font-family: Poppins;
`

const InputHalfBox = styled.div`
    width: 720px;
    // background-color: white;
`
const InputBox = styled.div`
    width: 100%;
    background-color: white;
`

const TextArea = styled.textarea`
    resize: none;
    height: 174px;
    width: 100%;
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
`;

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

const SemiTitle = styled.div`
    font-size: 14px;
    height: 24px;
    margin-bottom: 6px;
    color: #666666;
    width: 100%;
`

const SaveButton = styled.button`
    width: 100%;
    border: 0;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    height: 56px;
    background-color: #b69142;
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

export default Contact;