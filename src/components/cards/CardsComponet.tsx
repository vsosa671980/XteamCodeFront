import React from 'react'
import style from "./cards.module.css"

export default function CardsComponet() {
  return (
    <div className={style.container_card_general}>

        <div className={style.container_card}>
            <h2>Noticias</h2>
            <img src="/assets/img/triNa.jpg" alt=""  className={style.img_container}/>
        </div>
        <div className={style.container_card}>
            <h2>Competiciones</h2>
            <img src="/assets/img/carrera.jpg" alt=""  className={style.img_container}/>
        </div>
        <div className={style.container_card}>
            <h2>Entrenos</h2>
            <img src="/assets/img/foto1.webp" alt=""  className={style.img_container}/>
        </div>
    </div>
  )
}
