import React from 'react';
import style from "./cardPrices.module.css";
import "../../styles/Home.module.css";

export default function CardPrices() {

  const prices = [
    {
      id:1,
      title: "Socio Xteam",
      price: 100,
      description1:"Inclusion en grupos privados",
      description2:"Informacion sobre eventos",
      description3:"Competir bajo el nombre de el club",
      description4:"Salidas Sociales",
      description5:"Descuentos en productos",
    },
    {
      id:2,
      title: "Entrena",
      price: 100,
      description1:"Inclusion en grupos privados",
      description2:"Informacion sobre eventos",
      description3:"Competir bajo el nombre de el club",
      description4:"Salidas Sociales",
      description5:"Descuentos en productos",
    },
    {
      id:3,
      title: "Personal",
      price: 100,
      description1:"Inclusion en grupos privados",
      description2:"Informacion sobre eventos",
      description3:"Competir bajo el nombre de el club",
      description4:"Salidas Sociales",
      description5:"Descuentos en productos",
    }
  ];

  return (
    <div  className={style.container_card_general}>
      {prices.map(price => (
        <div key={price.id} className={style.container_card} >
          <div className={style.container_card_text}>
            <h1>{price.title}</h1>
            <ul className={style.ul}>
              <li>{price.price}</li>
              <li>{price.description1}</li>
              <li>{price.description2}</li>
              <li>{price.description3}</li>
              <li>{price.description4}</li>
              <li>{price.description5}</li>
              <li><button className="generalGreenButton">Seleccionar</button></li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
