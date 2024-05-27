// LayoutImg.jsx

import React, { useRef } from 'react';
import style from "./LayoutImg.module.css";
import LoginComponent from '../Login/LoginComponent';
import GeneralMenuComponent from '../GeneralMenu/GeneralMenuComponent';
import CardsComponet from '../cards/CardsComponet';

export default function LayoutUSerRegistered() {
  //
  const modalRef = useRef<HTMLDialogElement | null>(null);

  // Open the modal window
  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <>
    <GeneralMenuComponent />
      <div className={style.container}>
        <div className={style.container_text}>
          <h1>PROPONTE<br/>NUEVOS<br/>RETOS</h1>
        </div>
      </div>
      <div >
            <CardsComponet />     
      </div>
    
      <LoginComponent modalRef={modalRef} />
    </>
  );
}

