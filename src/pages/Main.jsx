import React from "react";
import Header from "../components/template/Header";
import Modal from "../components/template/Modal";
import AppRouter from "../router/Routes";

const Main = () => {
  return (
    <>
      <Header></Header>
      <div className='container hall'>
        <div className="contents">
          <Modal></Modal>
          <AppRouter></AppRouter>
        </div>
      </div>
    </>

  )
}

export default Main;