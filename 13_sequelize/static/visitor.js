const tbody = document.querySelector("tbody");

// 방명록 등록
// POST /visitor
function createVisitor() {
  // 넘겨줄 데이터
  const form = document.forms["visitor-form"];
  //   console.log(form);
  // 유효성 체크
  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록 모두를 기입해주세요!");
    return;
  }
  if (form.name.value.length >= 5) {
    alert("이름은 5글자 이내로 작성해주세요.");
    return;
  }

  // '방명록 등록' 버튼 클릭 시 axios 동작 -> controller로 전달됨
  axios({
    method: "post",
    url: "/visitor",
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log(res.data); // {id, name, comment}
    const { data } = res;
    const html = `
    <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.comment}</td>
        <td>
            <button type="button" onclick="editVisitor(${data.id})">수정</button>
        </td>
        <td>
            <button type="button" onclick="deleteVisitor(this,${data.id})">삭제</button>
        </td>
    </tr>
    `;

    tbody.insertAdjacentHTML("beforeend", html);
  });
}

// 방명록 삭제
// DELETE /visitor
function deleteVisitor(btn, id) {
  console.log(btn);
  console.log(id);

  axios({
    method: "delete",
    url: "/visitor",
    data: { id: id },
  }).then((res) => {
    console.log(res);
    alert(res.data);

    // 프론트에서 실제 요소 지우기
    // remove
    btn.parentElement.parentElement.remove(); // btn의 부모의 부모인 tr 태그 삭제
    // or
    // closet()
    // : 특정 선택자를 가진 가장 가까운 조상 요소를 찾음
    // btn.closest(`#tr_${id}`).remove();
  });
}

// 방명록 수정
// PATCH /visitor
// 1. 수정을 위한 입력창으로 변경,
// 2. 수정 버튼을 누르면 기존 데이터가 input의 value로 들어가게끔 한다.
// 2-1. 한 개의 데이터 조회

const btnGroup = document.querySelector("#btn-group");
const legend = document.querySelector("legend");
// GET /visitor/:id
function editVisitor(id) {
  axios({
    method: "get",
    url: `/visitor/${id}`,
    params: { id: id },
  }).then((res) => {
    const { data } = res;
    console.log("editVisitor data : ", data);
    const form = document.forms["visitor-form"];
    form.name.value = data.name;
    form.comment.value = data.comment;
  });
  // 수정버튼 눌렀을 때 바뀔 html 설정
  const html = `  
  <button type="button" onclick="editDo(${id})">수정</button>
  <button type="button" onclick="editCancel()">취소</button>
  `;
  btnGroup.innerHTML = html;
  legend.innerText = `${id}번 방명록 수정`;
}
// 실제 PATCH 요청
function editDo(id) {
  const form = document.forms["visitor-form"];

  axios({
    method: "PATCH",
    url: "/visitor",
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    // 프론트에서 데이터 변경할 수 있도록 설정
    const children = document.querySelector(`#tr_${id}`).children;
    console.log(children);
    children[1].textContent = form.name.value;
    children[2].textContent = form.comment.value;
    alert(res.data);
  });
}

// 취소 버튼을 누르거나, 수정이 끝난 후 실행 (input 초기화, 등록 버튼 다시 나타남)
function editCancel() {
  const form = document.forms["visitor-form"];
  // input value 초기화
  form.name.value = "";
  form.comment.value = "";

  // 등록 버튼으로 변경
  btnGroup.innerHTML = `<button type="button" onclick="createVisitor()">방명록 등록</button>`;
}
