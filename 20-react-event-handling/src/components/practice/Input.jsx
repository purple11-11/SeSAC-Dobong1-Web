export default function Input(props) {
  const { setData } = props;
  return (
    <div>
      내용 :
      <input
        type="text"
        placeholder="내용을 입력하세요"
        onChange={(e) => {
          setData((prevData) => {
            return { ...prevData, content: e.target.value };
          });
        }}
      />
    </div>
  );
}
