// LoginComponent.jsx

import React from 'react';
import style from "./Login.module.css";
import Link from 'next/link';

interface LoginComponentProps {
  modalRef: React.RefObject<HTMLDialogElement>;
}

export default function LoginComponent({ modalRef }: LoginComponentProps) {
    
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  }

  return (
    <div>
      <dialog className={style.modal} ref={modalRef}>
        <div className={style.container_login}>
          <form className={style.form_login}>
            <div className={style.form_login_text}>
                <h1>Bienvenido</h1>
            </div>
           
            <div className={style.container_form_input}>
                <input className={style.input}type="text" placeholder="Nombre" />
            </div>
            <div className={style.container_form_input}>
                <input className={style.input} type="password" placeholder="Contraseña" />
            </div>
            <div className={style.container_button_login}>
                <button className={style.button_login}type="submit">Login</button>

            </div>
            <div className={style.container_remember_login}>
              <p>Recordar contraseña</p>
              <Link href="/user/Register" className={style.button_register}>Registrarse</Link>
            
            </div>
            
          </form>
         
        </div>
      </dialog>
    </div>
  );
}
