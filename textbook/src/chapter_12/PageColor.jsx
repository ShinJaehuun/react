import React, { useState, useContext } from "react";
import "./PageColor.css";

//컨텍스트 객체 colorcontext를 생성
const ColorContext = React.createContext(null);

//usestate를 만들어두고 기본값은 false
//컨텍스트를 제공해주는데 value값에 usestate 값들을 넘겨준다.
function PageColor() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ColorContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ColorContext.Provider>
  );
}

//page안 headr , content, footer
function Page() {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

//headr안에 컨텍스트 isdark를 선언하고 백그라운드 isdark가 트루면 블랙 아니면 lightgray
// isdark가 true면 글씨의 색이 white 아니면 black
function Header() {
  const { isDark } = useContext(ColorContext);
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h2>컨텍스트 사용강의</h2>
    </header>
  );
}

//context항목들을 채워 넣을건데 hook을 사용해 isdark값을 불러오고 시작
//backgroundcolor와 color의 isdark가 true false에 따라 색이 달라짐
function Content() {
  const { isDark } = useContext(ColorContext);
  return (
    <content
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <p>오늘은 리액트 10주차 강의이며, Context 를 배우고 있습니다.</p>
    </content>
  );
}

//footer함수를 채워 넣는데 isdark와 setIsdark를 hook으로 컨텍스트를불러옴
//버튼을 눌러 togglcolor를 불러오면 isdark의 값이 true면 false , false면 true
//나머진 headr와 context와 같음
function Footer() {
  const { isDark, setIsDark } = useContext(ColorContext);
  const toggleColor = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <button className="button" onClick={toggleColor}>
        {" "}
        색상반전{" "}
      </button>
    </footer>
  );
}
export default PageColor;
