import React from "react";
import "../../assets/default/Button.scss";

const CloseModalBtn = () => {
  // const [closeModal, setCloseModal] = useState(false);
  // setCloseModal(() => {
  //   closeModal(true)
  // });

  return (
    <div className="btn_wrap">
      <button className="btn btn_modal_next" type="button">
        <span>Next</span>
      </button>
    </div> 
  );
}

export default CloseModalBtn;