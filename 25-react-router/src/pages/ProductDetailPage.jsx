import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  //   console.log("detail ::", products); // array [{}, {}, {}, ...]

  /* 
    const params = useParams();
    console.log(params); // {productId: '1'}
    console.log(params.productId); // 1 
  */
  const { productId } = useParams();
  //   console.log(productId);
  const navigate = useNavigate();

  const [targetProduct] = products.filter((product) => product.id === Number(productId));

  console.log(targetProduct); //{postId, id(판매 번호), name(상품명), body(상세설명), email(판매자)}

  if (!targetProduct) {
    return (
      <main>
        {" "}
        <h3>존재하지 않는 상품입니다.</h3>
      </main>
    );
  }
  return (
    <main>
      <h3>상세 페이지</h3>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <ul>
        <li>판매 번호 : {targetProduct.id}</li>
        <li>상품명 : {targetProduct.name}</li>
        <li>판매자 : {targetProduct.email}</li>
        <li>상세설명 : {targetProduct.body}</li>
      </ul>
    </main>
  );
}
