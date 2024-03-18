import img from "../pooh.png";
export function FoodComp(props) {
  const { food, color } = props;
  return (
    <div style={{ color }}>
      <h3>{food}</h3>
      <hr />
    </div>
  );
}

export function BestSeller(props) {
  const { title, author, price, type } = props;
  return (
    <div className="BestSellerApp">
      <div className="info">
        <h2>이번주 베스트셀러</h2>
        <img src={img} alt="pooh" />
        <h3>{title}</h3>
      </div>
      저자: {author} <br />
      판매가: {price}원 <br />
      구분: {type}
    </div>
  );
}

export function TextComp(props) {
  const { text, valid } = props;

  return (
    <div>
      <h3>{text}</h3>
      <button onClick={valid}>valid</button>
    </div>
  );
}

FoodComp.defaultProps = {
  food: "김밥",
};

TextComp.defaultProps = {
  text: "이건 기본 text props입니다.",
};
