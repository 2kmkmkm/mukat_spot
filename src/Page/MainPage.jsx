import React, { useState } from "react";
import logo_mukat from "../Img/logo_mukat.svg";
import styled from "styled-components";
import "../css/mainpage.css";
import point from "../Img/point.svg";
import mukat from "../Img/mukat.svg";
import logo_mukatlist from "../Img/logo_mukatlist.svg";
import { Link } from "react-router-dom";
import all from "../Img/전체.svg";

const Logo = styled.a`
  padding: 10px;
  margin-right: auto;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  height: 40px;
  background-color: none;
  box-shadow: 0 3px 3px #f1f1f1;
  align-items: center;
  justify-content: center;
`;

const Point = styled.a`
  padding-top: 3px;
  margin-left: auto;
  margin-right: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Univ = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: calc(100%-20px);
  margin: 10px;
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

const CategoryImage = styled.div`
  border: solid #fff3ef 5px;
  width: 70px;
  height: 70px;
  margin: auto;
  margin-bottom: 5px;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const CategoryButton = styled.a`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
`;

const Category = () => {
  return (
    <>
      <table className="category" style={{ padding: "0" }}>
        <tbody>
          <tr>
            <td>
              <Link className="categorybutton" to="/spotlist">
                <CategoryImage>
                  <img width="45px" src={all} alt="all" />
                </CategoryImage>
                <div style={{ marginTop: "10px" }}>전체</div>
              </Link>
            </td>
            <td>술집</td>
            <td>카페/디저트</td>
          </tr>
          <tr>
            <td>한식</td>
            <td>중식</td>
            <td>양식</td>
          </tr>
          <tr>
            <td>일식</td>
            <td>분식</td>
            <td>기타</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

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
          className="mainsearchbar"
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
      <div style={{ flex: "1" }}>
        <Header>
          <Logo to="..">
            <img src={logo_mukat} alt="logo" />
          </Logo>
          <SearchBar />
          <Point>
            <img src={point} width="25px" alt="point" />
          </Point>
        </Header>
        <Wrapper>
          <Univ>
            <img width="50px" src={mukat} alt="mukat" />
            <img width="100px" src={logo_mukatlist} alt="logo_mukatlist" />
            <UnivName>구름대학교</UnivName>
          </Univ>
        </Wrapper>
        <Category />
      </div>
    </>
  );
};

export default MainPage;
