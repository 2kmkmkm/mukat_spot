import react, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const spot = ["뭉게뭉게 구름"];
  // 검색어와 같은 값만 걸러내기
  const filterTitle = spot.filter((p) => {
    return p.title
      .replace(" ", "")
      .toLocalLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  // 검색 버튼 클릭 시
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div onSubmit={handleSubmit}>
      <input
        type="search"
        value={search}
        onChange={onChange}
        placeholder="음식점을 입력해주세요"
      />
    </div>
  );
};

export default SearchBar;
