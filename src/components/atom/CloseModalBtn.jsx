import React, {useState, useEffect} from "react";
import "../../assets/default/Button.scss";

const CloseModalBtn = (props) => {
  const [closeModal, setCloseModal] = useState(true);
  const clickCloseBtn = () => {
    setCloseModal(false)
  }

  useEffect(() => {
    props.closeModal(closeModal);
  }, [closeModal]);

  return (
    <div className="btn_wrap btn_modal_close">
      <button className="btn" type="button" onClick={clickCloseBtn}>
        <span>Start</span>
      </button>
    </div> 
  );
}

export default CloseModalBtn;