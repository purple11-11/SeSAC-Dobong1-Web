import classNames from "classnames";
import Names from "classnames/bind";
import style1 from "../styles/style.module.css";

export default function ModuleCss() {
  const setting = Names.bind(style1);

  const isTrue = true;
  const value = "first";

  return (
    <div className={style1.container}>
      <h4>.module.css 적용</h4>
      <div className={style1.box2}>
        <div>안녕하세요</div>
      </div>
      <br />
      <p>클래스 여러개 지정하는 3가지 방법</p>
      <div className={`${style1.first} ${style1.second}`}>클래스 여러개 지정1 (백틱 사용)</div>
      {/* ["first", "second"] >> "first second" -> join으로 space 제거 */}
      <div className={[style1.first, style1.second].join(" ")}>클래스 여러개 지정2 (join 이용)</div>
      <div className={classNames(style1.first, style1.second)}>
        classnames 메소드 이용 (install 필요)
      </div>
      <p>classnames의 .bind() 메소드 사용</p>
      <div className={setting("first", "second")}>classnames 모듈 사용1</div>
      {/* 클래스에 true/false 적용 가능 */}
      <div className={setting("first", { second: false })}>classnames 모듈 사용2</div>{" "}
      <div className={setting(value, { second: isTrue })}>classnames 모듈 사용2</div>
    </div>
  );
}
