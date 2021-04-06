import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  return (
    <Container>
      <LeftSide>
        <Title>HELIPAD</Title>
      </LeftSide>
      <RightSide>
        {/*<FakeLoginButton*/}
        {/*  onClick={() => {*/}
        {/*    toggle();*/}
        {/*  }}*/}
        {/*>*/}
        {/*  로그인 버튼*/}
        {/*</FakeLoginButton>*/}
        <Category>
          <Link to="/landing" className="headerMenu">
            Home
          </Link>
        </Category>
        <Category>
          {true ? (
            <Link to="/logout" className="headerMenu">
              Logout
            </Link>
          ) : (
            <Link to="/sign-up" className="headerMenu">
              Sign up
            </Link>
          )}
        </Category>
        <Category>
          {true ? (
            <Link to="/mypage" className="headerMenu">
              MyPage
            </Link>
          ) : (
            <Link to="/login" className="headerMenu">
              Login
            </Link>
          )}
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
  font-family: termina;
  padding-left: 230px;
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
