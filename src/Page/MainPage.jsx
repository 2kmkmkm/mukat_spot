import React, { useState } from "react";
import Category from "../components/Category";
import logo_mukat from "../Img/logo_mukat.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled.a`
  padding-left: 20px;
  width: 100px;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  height: 40px;
  background-color: none;
  box-shadow: 0 0 5px 0 gray;
  align-items: center;
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
        />
      </div>
    );
  };

  return (
    <>
      <Header>
        <Logo to="..">
          <img src={logo_mukat} alt="logo" />
        </Logo>
        <SearchBar />
      </Header>
    </>
  );
};

export default MainPage;
