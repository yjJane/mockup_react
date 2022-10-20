import React, {useRef} from "react";
import "../../assets/ModalPopup.scss";
import NextModalBtn from "../atom/NextModalBtn";
import CloseModalBtn from "../atom/CloseModalBtn";

const Modal = () => {
  const modalInner01 = useRef(null);
  const modalInner02 = useRef(null);
  const popUpFunc = (childProp) => {
    if(childProp){
      modalInner01.style.display = 'none';
    }
  }

  return (
    <div className="modal">
      <div className="modal_inner modal_inner1" ref={modalInner01}>
        <div className="modal_inner_text">
          <p>Hello. Welcome to a virtual exhibition hall of 2021 Foreing Company Day.</p>
        </div>
        <NextModalBtn popUpFunc={popUpFunc}></NextModalBtn>
      </div>
      <div className="modal_inner modal_inner2" ref={modalInner02}>
        <div className="modal_inner_text">
          <p>Hello. Welcome to a virtual exhibition hall of 2021 Foreing Company Day.</p>
        </div>
        <CloseModalBtn></CloseModalBtn>
      </div>
      {/* Modal Background */}
      <div className="modal_bg"></div>
    </div>
    
  )
}

export default Modal;