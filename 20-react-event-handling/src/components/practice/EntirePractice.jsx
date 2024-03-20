import { useState } from "react";
import Input from "./Input";
import Result from "./Result";
import Select from "./Select";

export default function EntirePractice() {
  const [data, setData] = useState({
    // 4개의 개별 state가 아닌 object로 한 번에 관리할 수 있다!
    fruit: "apple",
    background: "black",
    color: "white",
    content: "text",
  });
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <Select setData={setData} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <Input setData={setData} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <Result data={data} />
      </div>
    </div>
  );
}
