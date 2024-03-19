import React, { useState } from "react";
import Category from "../components/Category";
import logo_mukat from "../Img/logo_mukat.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../components/main.css";
import point from "../Img/point.svg";
import icon_search from "../Img/icon_serach.svg";
import mukat from "../Img/mukat.svg";
import logo_mukatlist from "../Img/logo_mukatlist.svg";

const Logo = styled.a`
  padding: 15px;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  height: 40px;
  background-color: none;
  box-shadow: 0 0 5px 0 gray;
  align-items: center;
`;

const Point = styled.a`
  padding: 15px;
  padding-top: 18px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Univ = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 340px;
  height: 180px;
  border: solid #fff3ef;
  border-radius: 2rem;
`;

const UnivName = styled.div`
  display: flex;
  margin-top: 15px;
  height: 20px;
  background-color: #fe6a38;
  width: 120px;
  border: none;
  border-radius: 2rem;
  color: white;
  text-align: center;
  font-size: 10px;
  align-items: center;
  justify-content: center;
`;

const MainPage = () => {
  const SearchBar = () => {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
      setSearch(e.target.value);
    };

    /*
    const spot = ["뭉게뭉게 구름"];
    // 검색어와 같은 값만 걸러내기
    const filterTitle = spot.filter((p) => {
      return p.title
        .replace(" ", "")
        .toLocalLowerCase()
        .includes(search.toLocaleLowerCase());
    });
    */

    // 검색 버튼 클릭 시
    const handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
      <div onSubmit={handleSubmit}>
        <input
          className="searchbar"
          type="search"
          value={search}
          onChange={onChange}
          placeholder="음식점을 입력해주세요"
        ></input>
      </div>
    );
  };

  return (
    <>
      <div>
        <Header>
          <Logo to="..">
            <img src={logo_mukat} alt="logo" />
          </Logo>
          <SearchBar />
          <Point>
            <img src={point} alt="point" />
          </Point>
        </Header>
        <Wrapper>
          <Univ>
            <img width="50px" src={mukat} alt="mukat" />
            <img width="100px" src={logo_mukatlist} alt="logo_mukatlist" />
            <UnivName>구름대학교</UnivName>
          </Univ>
        </Wrapper>
      </div>
    </>
  );
};

export default MainPage;
