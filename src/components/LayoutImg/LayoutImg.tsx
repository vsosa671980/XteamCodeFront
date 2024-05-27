// LayoutImg.jsx

import React, { useRef } from 'react';
import style from "./LayoutImg.module.css";
import LoginComponent from '../Login/LoginComponent';
import GeneralMenuComponent from '../GeneralMenu/GeneralMenuComponent';

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
    <GeneralMenuComponent />
      <div className={style.container}>
        <div className={style.container_text}>
          <h1>PROPONTE<br/>NUEVOS<br/>RETOS</h1>
        </div>
        <div></div>
        <div className={style.container_button}>
          <button className={style.container_button_button} onClick={openModal}>Únete al Club</button>
        </div>
      </div>

      <div className={style.container_logo}>
        <h1> AMISTAD, ESFUERZO Y SUPERACIÓN</h1>  
        <h3>EL TRIATLÓN NO ES SOLO UN DEPORTE,
         ES UN ESTILO DE VIDA QUE LO ABARCA TODO.</h3>                  
      </div>
      <div className={style.container_fundaments}>
        <h1>Nuestra Forma de ver el triathlon</h1>
        <p>Fundada en  2005, la sección de triatlón cuenta actualmente con mas de 150 socios de todas las edades que disfrutan la practica de la natación, el ciclismo y la carrera a pie. No es sólo un deporte, es un estilo de vida que lo abarca todo.

       Nuestros planes de entrenamiento se adaptan a diferentes niveles: iniciación al deporte, rendimiento y larga distancia y se estructuran durante toda la temporada. El compañerismo, el respeto y la amistad son valores que están presentes.
       ‍Tú eliges tus retos, nosotros te ayudamos a hacerlos posibles.

       Apostamos por la cultura del esfuerzo y seguimos trabajamos cada día para ser un referente de triatlón en la Comunidad Valenciana</p>
      </div>
    
      <LoginComponent modalRef={modalRef} />
    </>
  );
}

