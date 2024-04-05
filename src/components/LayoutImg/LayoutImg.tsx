// LayoutImg.jsx

import React, { useRef } from 'react';
import style from "./LayoutImg.module.css";
import LoginComponent from '../Login/LoginComponent';

export default function LayoutImg() {
  //
  const modalRef = useRef<HTMLDialogElement | null>(null);

  // Open the modal window
  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.container_text}>
          <h1>PROPONTE<br/>NUEVOS<br/>RETOS</h1>
        </div>
        <div></div>
        <div className={style.container_button}>
          <button className={style.container_button_button} onClick={openModal}>Unete a Nosotros</button>
        </div>
      </div>

      <div className={style.container_logo}>
        <h1> AMISTAD, ESFUERZO Y SUPERACIÓN</h1>  
        <h3>EL TRIATLÓN NO ES SOLO UN DEPORTE,
         ES UN ESTILO DE VIDA QUE LO ABARCA TODO.</h3>                  
      </div>
    
      <LoginComponent modalRef={modalRef} />
    </>
  );
}

