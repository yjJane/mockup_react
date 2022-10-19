import React from 'react'
import "./assets/default.module.css";
import Header from './components/Header';
import AppRouter from './router/Routes';


const App = () => {
  return (
    <>
      <Header></Header>
      <div className='container hall'>
        <AppRouter></AppRouter>
      </div>
    </>
  )
}

export default App;
