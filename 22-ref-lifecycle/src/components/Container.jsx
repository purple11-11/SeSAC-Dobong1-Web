export default function Container({ children }) {
  return (
    // children을 이용해서 레이아웃 잡기
    <>
      <header>POSTLIST 📧</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}
