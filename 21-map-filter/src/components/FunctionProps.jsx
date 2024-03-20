// props가 아닌 객체 자체를 받는 방법
export default function FunctionProps({ name, number: count, price }) {
  return (
    <div>
      <h5>과일 이름 : {name}</h5>
      <p>
        {count}개에 {price}원
      </p>
      <hr />
    </div>
  );
}
