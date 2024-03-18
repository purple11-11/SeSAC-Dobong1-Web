// export function FunctionProps(props) {
//   // props = {
//   //     name: "사과",
//   //     number: 5,
//   //     price: 1000,
//   // }
//   return (
//     <div>
//       <h5>과일 이름 : {props.name}</h5>
//       <p>
//         {props.number}개에 {props.price}원
//       </p>
//       <hr />
//     </div>
//   );
// }

// 구조분해할당
/* export function FunctionProps(props) {
  const { name, number: count, price } = props;
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
 */

// props가 아닌 객체 자체를 받는 방법
export function FunctionProps({ name, number: count, price }) {
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

export function FunctionProps2(props) {
  const { name, number, price, children } = props;
  return (
    <div>
      <h5>과일 이름 : {name}</h5>
      <p>
        {number}개에 {price}원
      </p>
      <div>{children}</div>
      <hr />
    </div>
  );
}

// 부모 컴포넌트에서 넘겨주는 값이 없는 경우, 기본값 설정
// 현재컴포넌트이름.defaultProps={정의할 데이터를 객체로 표현}
FunctionProps2.defaultProps = {
  name: "샤인머스켓",
  number: 3,
};
