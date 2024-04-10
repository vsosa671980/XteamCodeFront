import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import LayoutImg from '@/components/LayoutImg/LayoutImg'
import CadsPricesComponents from '@/components/cardsPrices/CadsPricesComponents'
import React from 'react'
import style from "./prices.module.css";

export default function Prices() {
  return (
    <div>
      
        <GeneralMenuComponent  />
        <div className={style.container_text}>
            <h1>¡Entrena con nosotros, únete a Xteam Triathlon!</h1>
        </div>
        <div className={style.container_text}>
            <h3>Si quieres formar parte de esta gran familia, decide que plan se adapta mejor a tus necesidades de entrenamiento.</h3> 
        </div>

        <div>
            <CadsPricesComponents />
        </div>


      
    </div>
  )
}
