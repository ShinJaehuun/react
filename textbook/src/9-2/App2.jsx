import React, { useState, useEffect } from "react";
import "./App.css";

const serverURL = "http://localhost:65020/users";

function App2() {
  const [userData, setUserData] = useState(null);
  const [login, checklogin] = useState(null);

  const getUserData = () => {
    fetch(serverURL)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .then(console.log(userData));
  };

  useEffect(getUserData, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const id = event.target.id.value;
    const passwd = event.target.passwd.value;
    console.log("Submit 버튼 클릭 후 서버로 POST 전송");

    fetch(serverURL, {
      // 서버로 입력정보를 전송!
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, id, passwd }),
    }).then(getUserData());
  };

  const onCheckHandler = (event) => {
    event.preventDefault();
    const id = event.target.id.value;
    const passwd = event.target.passwd.value;

    //(user.id===id && user.pwd ===pwd ) => checklogin(true)  else =>checklogin(false)
    checklogin(false);
    userData.map((user, i) => {
      if (user.id === id && user.passwd === passwd) {
        checklogin(true);
        console.log("!!");
      }
    });
  };

  function Check() {
    if (login === true) {
      return <p>회원으로 확인 되었습니다</p>;
    } else if (login === false) {
      return <p>그런 회원은 없습니다</p>;
    }
  }
  return (
    <>
      <div>
        <h2>회원등록</h2>
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="name" placeholder="이름" />
          <input type="text" name="id" placeholder="아이디" />
          <input type="text" name="passwd" placeholder="암호" />
          <button type="submit">등록</button>
        </form>
      </div>
      <p></p>
      <div>
        <h2>회원검색</h2>
        <form onSubmit={onCheckHandler}>
          <input type="text" name="id" placeholder="아이디" />
          <input type="text" name="passwd" placeholder="암호" />
          <button type="submit">검색</button>
        </form>
        <p style={{ color: "red" }}>
          <Check />
        </p>
      </div>
      <p></p>
      <div>
        <h2>회원목록</h2>
        <ol>
          {userData === null ? (
            <p>서버에서 데이터를 가져오는 중...</p>
          ) : (
            userData.map((user, i) => (
              <li key={user.keyid}>
                {user.name} {user.id} {user.passwd}
              </li>
            ))
          )}
        </ol>
      </div>
    </>
  );
}
export default App2;
