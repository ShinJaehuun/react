import React from "react";
import SubDialog from "./SubDialog";

function Dialog(props) {
  return (
    <div>
      <SubDialog
        title="-------Warning-------"
        message="오류가 발생할 수도 있습니다."
        color="Red"
      />
      <SubDialog
        title="-------Hello-------"
        message="우리 사이트에 방문하신 것을 환영합니다.!"
        color="Blue"
        check="1"
      />
      <SubDialog
        title="-------Error-------"
        message="오류가 발생했습니다!"
        color="Yellow"
      />
      <SubDialog
        title="-------Notice-------"
        message="한번만 클릭하세요!"
        color="Green"
        check="1"
      />
    </div>
  );
}
export default Dialog;
