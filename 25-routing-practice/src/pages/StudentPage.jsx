import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
  background-color: #7fff00;
  height: 100px;
`;
const BlueSpan = styled.span`
  color: blue;
`;
const RedSpan = styled.span`
  color: red;
`;
export default function StudentPage() {
  const { name } = useParams();
  const [realName, setRealName] = useSearchParams();
  const real = realName.get("name");
  const navigate = useNavigate();
  return (
    <Main>
      <h2>
        학생 이름은 <BlueSpan>{name}</BlueSpan> 입니다.
      </h2>
      {name === "new" && (
        <h2>
          실제 학생 이름은 <RedSpan>{real}</RedSpan>입니다.
        </h2>
      )}
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </Main>
  );
}
