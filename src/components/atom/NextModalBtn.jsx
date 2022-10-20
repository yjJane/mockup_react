import React, { useState } from "react";
import "../../assets/default/Button.scss";

const NextModalBtn = (props) => {
  console.log(props);
  const [nextModal, setNextModal] = useState(true);
  setNextModal(() => {
    nextModal(false);
  });

  props(nextModal);

  return (
    <div className="btn_wrap">
      <button className="btn btn_modal_next" type="button" onClick={setNextModal}>
        <span>Next</span>
      </button>
    </div> 
  );
}

export default NextModalBtn;