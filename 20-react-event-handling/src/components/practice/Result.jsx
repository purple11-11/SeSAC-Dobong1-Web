export default function Result(props) {
  const { fruit, background, color, content } = props.data;

  return (
    <div>
      <img src={`/${fruit}.jpg`} alt="과일 사진" width={100} height={100} />
      {/* public에 넣은 이미지를 불러올 경우 /를 root로 사용할 수 있다. */}
      <div
        style={{
          backgroundColor: background,
          color,
          padding: "10px",
          margin: "10px",
        }}
      >
        {content}
      </div>
    </div>
  );
}
