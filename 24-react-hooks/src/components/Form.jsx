import { useForm } from "react-hook-form";

export default function Form() {
  //   const forms = useForm();
  //   console.log(forms);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  /* 단축 평가 */
  /* 
    && : 여러 조건 중에 하나라도 false라면 전체 값 false
    || : 여러 조건 중 하나라도 true라면 전체 값 true
   */
  //   console.log("단축 평가 :: ||", false || "hello"); // 단축 평가 :: || hello
  //   console.log("단축 평가 :: ||", true || "hello"); // 단축 평가 :: || true
  //   console.log("단축 평가 :: &&", false && "hello"); // 단축 평가 :: && false
  //   console.log("단축 평가 :: &&", true && "hello"); // 단축 평가 :: && hello

  /* 유효성 체크 메시지 */
  //   console.log("errors ::", errors);
  //   console.log("email invalid message ::", errors.email?.message); // invalid message 띄워줌

  /* watch() */
  console.log("watch username ::", watch("username"));
  console.log("entire info", watch()); // {} 형태 리턴

  const onValid = (data) => {
    console.log("valid", data);
    // 클라이언트가 작성한 데이터가 객체 형태의 data로 들어옴
    // data = {userName: "~~", ...}
    // axios 요청 처리 여기서 하면 됨
  };

  const onInvalid = (data) => {
    console.log("invalid", data);
    console.log(data.userName?.message);
  };

  //   const userNameRegister = register("userName"); // register로 지정한 이름이 객체의 key 값으로 들어감

  return (
    <>
      <h1>useForm 사용해보기</h1>
      {/* 
          handleSubmit(func1[, func2]) : 인자로 두 개의 함수를 받을 수 있음
            - func1: 필수, 유효할 때 실행 (폼 제출이 잘 됐을 때 실행)
            - func2: 선택, 유효하지 않을 때 실행
        */}
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        {/* <form> */}
        <input
          type="text"
          placeholder="username"
          {...register("userName", {
            required: "이름을 입력해주세요.",
            minLength: {
              value: 2,
              message: "이름은 최소 두 글자 이상 작성해주세요.",
            },
          })}
        />
        <br />
        {errors.username?.message}
        <br />
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            validate: {
              useGmail: (value) => {
                // value: input.value
                // gmail.com이 포함되면 true 리턴, 포함되지 않으면 string 값 리턴
                return value.includes("@gmail.com") || "gmail로만 가입 가능합니다.";
              },
            },
          })}
        />
        <br />
        {errors.email?.message}
        <br />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
          autoComplete="off"
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
