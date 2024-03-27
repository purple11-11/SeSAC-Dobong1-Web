import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  // const products = {
  //     id: 1,
  //     name: "다이슨 슈퍼소닉",
  //     email: "Eliseo@gardner.biz",
  //     body: "다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.",
  //   },
  //   {}, ...
  return (
    <section className="ProductList">
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </section>
  );
}
