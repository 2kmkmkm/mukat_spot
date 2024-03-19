import React, { useState } from "react";
import styled from "styled-components";
import back from "../Img/back.svg";
import point from "../Img/point.svg";
import location from "../Img/location.svg";
import catfoot from "../Img/catfoot.svg";
import "../css/spotlistpage.css";
import "../font/font.css";

const Header = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 40px;
  background-color: none;
  box-shadow: 0 3px 3px #f1f1f1;
  align-items: center;
  justify-content: center;
`;

const Back = styled.div`
  padding-left: 20px;
`;

const CategoryName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: "Pretendard-Bold";
`;

const Point = styled.a`
  padding-right: 20px;
  padding-top: 3px;
`;

const Wrapper = styled.div`
  width: calc(100%-30px);
  margin: 15px;
  align-items: center;
  justify-content: center;
`;

const SpotImage = styled.div`
  border-radius: 1.5rem;
  border: 1px solid black;
  height: 110px;
  display: flex;
`;

const Location = () => {
  return (
    <>
      ``
      <div className="location">
        <img src={location} width="10px" alt="location"></img>
        <div style={{ padding: "3px" }}>800m</div>
      </div>
    </>
  );
};

const SpotInfo = () => {
  return (
    <>
      <div className="spotinfo">
        <div className="spotname">뭉게뭉게 구름</div>
        <div className="address">서울특별시 구름구 미르미동 123-2</div>
        <div className="review">
          <img
            src={catfoot}
            style={{ paddingTop: "1px" }}
            alt="catfoot"
            width="20px"
          />
          <div className="grade">5.0</div>
        </div>
      </div>
    </>
  );
};

const Spotlist = () => {
  return (
    <>
      <div className="spotlist">
        <SpotImage>
          <Location>800m</Location>
        </SpotImage>
        <SpotInfo />
      </div>
    </>
  );
};
const SpotlistPage = () => {
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
      <Header>
        <Back>
          <img src={back} alt="back" />
        </Back>
        <CategoryName>전체</CategoryName>
        <Point>
          <img src={point} width="25px" alt="point" />
        </Point>
      </Header>
      <SearchBar />
      <Wrapper>
        <Spotlist />
      </Wrapper>
    </>
  );
};

export default SpotlistPage;
