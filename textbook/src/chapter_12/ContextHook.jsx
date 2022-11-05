import React, { useContext } from "react";

//컨텍스트 객체를 생성
const ThemeContext = React.createContext("light");

//컨텍스트를 사용할 수 있도록 제공
function ContextApp() {
  return (
    <ThemeContext.Provider value="lavender">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}
function ThemeButton() {
  return (
    <div>
      <Button />
    </div>
  );
}

//컨텍스트를 참조할 수 있도록 하는데 usecontext() hook을 사용해서 value값을
//넣어주고 시작
function Button() {
  const value = useContext(ThemeContext);
  return (
    <div
      style={{
        margin: 50,
        padding: 50,
        backgroundColor: value,
      }}
    >
      <p> 컨텍스트를 가지고 데이터를 전달하는 예 (Hook을 사용해서)</p>
      <button>확인</button>
    </div>
  );
}
export default ContextApp;
