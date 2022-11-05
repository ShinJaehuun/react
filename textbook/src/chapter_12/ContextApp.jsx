import React from "react";

//컨텍스트 객체를 생성해주고 기본값으로는 light를 넣어둠
const ThemeContext = React.createContext("light");

//컨텍스트를 사용할 수 있도록 제공하는데 value는 라벤더
function ContextApp() {
  return (
    <ThemeContext.Provider value="lavender">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
//Toolbar 의 div안에 THemeButton
function Toolbar() {
  return (
    <div>
      <THemeButton />
    </div>
  );
}
//Button
function THemeButton() {
  return (
    <div>
      <Button />
    </div>
  );
}

//BUtton에서 컨텍스트를 참조해서 사용할 수 있도록 consumer
function Button() {
  return (
    <div>
      <ThemeContext.Consumer>
        {(value) => (
          <div style={{ margin: 50, padding: 50, backgroundColor: value }}>
            <p>컨텍스트를 가지고 데이터를 전달하는 예</p>
            <button>확인</button>
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  );
} // css 백그라운드 색깔에 컨텍스트의 value인 라벤더를 넣어서 마진,패딩 50안에 p와 button

export default ContextApp;
