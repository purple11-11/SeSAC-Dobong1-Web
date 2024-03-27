import { useForm } from "react-hook-form";

export default function PracticeForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log("valid ::", data);
  };

  const onInvalid = (data) => {
    console.log("invalid ::", data);
  };
  return (
    <>
      <h2>useForm 실습</h2>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="이름(name)"
          {...register("username", {
            required: "이름은 필수 항목입니다.",
            minLength: {
              value: 2,
              message: "이름은 필수 항목입니다.",
            },
          })}
        />
        <br />
        {errors.username?.message}
        <br />

        <input
          type="text"
          placeholder="나이(age)"
          {...register("age", {
            required: "나이를 입력해주세요.",
            validate: {
              ageSubmit: (value) => {
                return value > 0 || "0 이상의 숫자만 입력가능합니다.";
              },
            },
          })}
        />
        <br />
        {errors.age?.message}
        <br />
        <button>제출</button>
      </form>
    </>
  );
}
