import { useState } from "react";

export default function PracticeSearch() {
  const [list, setList] = useState([]);
  const [writer, setWriter] = useState(""); // 작성자
  const [title, setTitle] = useState(""); // 제목
  const [searchType, setSearchType] = useState("writer"); // 검색 타입 select
  const [search, setSearch] = useState(""); // 검색어 input
  const [result, setResult] = useState([]);

  const addList = () => {
    if (writer.trim().length === 0 || title.trim().length === 0)
      return alert("작성자와 제목을 입력해주세요.");

    setList(
      list.concat({
        writer,
        title,
      })
    );
    setTitle("");
    setWriter("");
  };

  // 검색 타입 설정
  const selectSearchType = (e) => {
    setSearchType(e.target.value);
  };

  // 실제 검색하는 함수
  const searching = () => {
    // console.log(searchType);
    let searchResult = list.filter((item) => {
      //   console.log(searchType);
      //   console.log(item);
      console.log(item[searchType]);
      if (!item[searchType].includes(search)) {
        return null;
      }
      return item;
    });

    setResult(searchResult);
    setSearch("");
  };

  return (
    <div>
      {/* 등록 */}
      <fieldset>
        작성자:
        <input
          type="text"
          placeholder="작성자"
          onChange={(e) => {
            setWriter(e.target.value);
          }}
          value={writer}
        />
        제목 :
        <input
          type="text"
          placeholder="제목"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <button type="button" onClick={addList}>
          작성
        </button>
      </fieldset>
      <br />

      {/* 검색 */}
      <div>
        <select onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>

        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <button type="button" onClick={searching}>
          검색
        </button>
        <button type="button">전체</button>
      </div>
      <br />

      {/* 모든 데이터 */}
      <table border={1} style={{ borderCollapse: "collapse", width: "50%" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((el, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{el.title}</td>
                <td>{el.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <br />

      {/* 검색 결과 */}
      {result.length === 0 ? (
        <h4>검색 결과가 없습니다.</h4>
      ) : (
        <table border={1} style={{ borderCollapse: "collapse", width: "50%" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, idx) => {
              return (
                <tr key={idx + 1}>
                  <td>{idx + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
