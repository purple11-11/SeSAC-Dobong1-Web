import FunctionProps from "./FunctionProps";

export default function PropsMap({ arr }) {
  console.log(arr);
  return (
    <div>
      {arr?.map((el, index) => {
        return (
          <ul key={index}>
            <li>과일 이름 : {el.name}</li>
            <li>개수 : {el.number}</li>
            <li>가격 : {el.price}</li>
          </ul>
        );
      })}

      {arr?.map((el, index) => {
        return <FunctionProps key={index} name={el.name} number={el.number} price={el.price} />;
      })}
      {/* 배열이 넘어오지 않을경우 보여줄 값 */}
      {!arr && <h1>배열이 전달되지 않았습니다.</h1>}
    </div>
  );
}
