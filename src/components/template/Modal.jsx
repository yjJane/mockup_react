import React, {useRef, useState} from "react";
import "../../assets/ModalPopup.scss";
import NextModalBtn from "../atom/NextModalBtn";
import CloseModalBtn from "../atom/CloseModalBtn";
import InfoModalStyle from "../atom/InfoModalStyle";

const Modal = () => {
  const [changePopup, setChangePopup] = useState(true);
  const [closeModal, setCloseModal] = useState(true);
  // const modalInner01 = useRef(null);
  // const modalInner02 = useRef(null);
  const popUpFunc = (childProp) => {
    setChangePopup(childProp);
  }
  const modalFunc = (closeProp) => {
    setCloseModal(closeProp);
  }

  return (
    <>
      { closeModal ? (

        <div className="modal">
            
          { changePopup ? (
            <div className="modal_inner modal_inner1">
              <div className="modal_inner_text">
                <p>Hello. Welcome to a virtual exhibition hall of 2021 Foreing Company Day.</p>
              </div>
              <NextModalBtn popUpFunc={popUpFunc}></NextModalBtn>
            </div>
            ) : (
            <div className="modal_inner modal_inner2 modal_inner_help">
              <div className="modal_help-center">
                <InfoModalStyle></InfoModalStyle>
                <CloseModalBtn closeModal={modalFunc}></CloseModalBtn>
              </div>
            </div>
            )
        }

          <div className="modal_bg"></div>

        </div>

      ) : (
        <></>
      )
      
    
      }


    </>
  )
}

export default Modal;