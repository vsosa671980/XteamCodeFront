import React from 'react';
import style from "./GeneralTables.module.css";
import Link from 'next/link';

interface Button {
    [key: string]: string;
  }

  interface tableName {
    [key: string]: string;
  }

//Extends from Record
interface Props<T extends Record<string, any>> {
    data: T[];
    buttons: Button[];
    tableName:tableName
    
}

export default function GeneralTablesComponent<T extends Record<string, any>>({data,buttons,tableName}: Props<T>){

    if (!data || data.length === 0) {
        return <div>No hay datos disponibles.</div>;
    }
    //Return array with oll the keys of the object
    const keys = Object.keys(data[0]); 
    console.log(keys)// Obtiene las claves del primer objeto en el array

    return (
        <div>
            <table className={style.table}>
                <thead>
                    <tr>
                        {keys.map((key, index) => (
                            <th key={index} className={style.th}>{key}</th>
                        ))}
                       

                          <th className={style.th}>Actualizar</th>
                            {
                                tableName.name !== "users" ? <th className={style.th}>Eliminar</th> : null
                             }
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, rowIndex) => (
                        <tr key={rowIndex} className={style.container_td}>
                            {keys.map((key, colIndex) => (
                                //Obtein the value of all the columns
                                <td key={colIndex} className={style.td}>
                                      {key === "estado" ? 
                                      <img src={item[key as keyof T] === "active" ? buttons[0].active : buttons[0].inactive} className={style.img_status} alt={item[key as keyof T]} /> 
                                      : item[key as keyof T]}
                                </td>
                            ))}
                          

                            <td className={style.td}>
                            <Link href="/ruta/a/la/que/quieres/navegar">
                              <img src="/assets/img/actualizar.svg" className={style.img_changes}></img>
                            </Link>
                            </td>
                            {
                               tableName.name !== "users" ? <td className={style.td}>
                                  <Link href="/ruta/a/la/que/quieres/navegar">
                                     <img src="/assets/img/Eliminar.svg" className={style.img_changes}></img>
                                  </Link>
                                </td> : null
                             }
                        </tr>
                    ))}
                  
                </tbody>
            </table>

            <tr className={style.pagination}>
                        <td><img src="/assets/img/flecha-atras.png" className={style.img_pagination}></img></td>
                        <td className={style.number_page_active}>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td><img src="/assets/img/flecha-siguiente.png" className={style.img_pagination}></img></td>
            </tr>
        </div>
    );
}
