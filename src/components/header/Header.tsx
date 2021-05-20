import React, { useState, useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../router/config/Provider/AuthProvider';
import { useTranslation } from 'react-i18next';
export const Header = () => {
  const { authenticated } = useContext(AuthContext);
  const [language, setLanguage] = useState('english');
  const { t, i18n } = useTranslation();

  const selectEnglish = () => {
    console.log('select EN');
  };
  const selectKorean = () => {
    console.log('select KOR');
  };
  return (
    <Container>
      <LeftSide>
        <Link to="/asset/neighborhood" className="headerMenu">
          <Title>HELIPAD</Title>
        </Link>
      </LeftSide>
      <RightSide>
        <Category>
          <Link to="/asset/neighborhood" className="headerMenu">
            Home
          </Link>
        </Category>
        <Category>
          {authenticated ? (
            <Link to="/auth/logout" className="headerMenu">
              Logout
            </Link>
          ) : (
            <Link to="/auth/signup" className="headerMenu">
              Sign up
            </Link>
          )}
        </Category>
        <Category>
          {authenticated ? (
            <Link to="/auth/mypage" className="headerMenu">
              MyPage
            </Link>
          ) : (
            <Link to="/auth/login" className="headerMenu">
              Login
            </Link>
          )}
        </Category>
        <Category>
          <SelectLanguageBtn className="headerMenu" onClick={selectEnglish}>
            English
          </SelectLanguageBtn>
        </Category>
        <Category>
          <SelectLanguageBtn className="headerMenu" onClick={selectKorean}>
            한국어
          </SelectLanguageBtn>
        </Category>
      </RightSide>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
const LeftSide = styled.div`
  width: 70%;
`;
const Title = styled.div`
  font-size: 45px;
  padding-left: 230px;
  text-decoration: none;
`;

const RightSide = styled.div`
  width: 30%;
  display: flex;
  padding-left: 100px;
`;
const Category = styled.div`
  .headerMenu {
    display: block;
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
    background: none;
    border: none;
  }
`;

const FakeLoginButton = styled.button`
  outline: none;
  border: none;
  border-radius: 5%;
  color: #9775fa;
  background: #edf2ff;
  width: 120px;
  height: 31px;
  font-weight: bold;
`;
//!
const HeaderWrapper = styled.div`
  margin-top: 66px;
  margin-bottom: 65px;
  border-bottom: 1px solid black;
`;
const HeaderRow = styled.div`
  margin-left: 250px;
  margin-bottom: 66px;
  font-size: 45px;
  font-family: termina;
`;
const HeaderTitle = styled.div`
  margin-right: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const HeaderMenus = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  font-size: 18px;
`;

const Divider = styled.div``;
const SelectLanguageBtn = styled.button``;
