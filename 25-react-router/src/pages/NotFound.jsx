import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/">홈으로 이동하기</Link>
    </>
  );
}
