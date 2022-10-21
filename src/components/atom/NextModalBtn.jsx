import React, { useEffect, useState } from "react";
import "../../assets/default/Button.scss";

const NextModalBtn = (props) => {
  const [nextModal, setNextModal] = useState(true);
  const clickBtn = () => {
    setNextModal(false)
  }
  //Cannot update a component while rendering a different component To locate the bad setState() call inside `NextModalBtn` : 다른 컴포넌트를 리렌더링 하는 도중에는 다른 컴포넌트를 업데이트 할 수 없다는 내용.

  //react에서 권고하는 몇가지 규칙.
  //-렌더링하는 동안 setState를 사용하면 안 됩니다. 수업은 항상 이것에 대해 경고했습니다.
  //-해당 함수 구성 요소 본문은 본질적으로 클래스 구성 요소 렌더링 메서드와 동일합니다
  //즉 이 경고 메세지는 규칙이 변경된 것이 아니고 규칙을 지킬 수 있도록 이전에 하지않던 경고를 주는 것 이라고 한다.

  //useEffect로 래핑 하는게 정석 이라고 한다. useEffect로 래핑하니까 경고 문구가 사라졌다.
  useEffect(() => {
    props.popUpFunc(nextModal);
  }, [nextModal])
  
  return (
    <div className="btn_wrap">
      <button className="btn btn_modal_next" type="button" onClick={clickBtn}>
        <span>Next</span>
      </button>
    </div> 
  );
}

export default NextModalBtn;