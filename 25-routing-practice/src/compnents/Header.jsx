import { Link } from "react-router-dom";
import styled from "styled-components";

const MyHeader = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: aliceblue;
  height: 80px;
`;
const MyLink = styled(Link)`
  text-decoration: none;
  color: #8f784b;
  font-weight: 700;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: skyblue;
  }
`;
export default function Header() {
  return (
    <MyHeader>
      <MyLink to="/" className="menu-item">
        홈으로
      </MyLink>
      <MyLink to="/student/allie">학생</MyLink>
      <MyLink to="/student/codingon">코딩온</MyLink>
      <MyLink to="/student/new?name=jisoo">query</MyLink>
    </MyHeader>
  );
}
