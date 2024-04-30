import React, { useEffect, useState } from 'react'
import  style from "./createButton.module.css"
import { table } from 'console';
import Link from 'next/link';
import { Utils } from '@/helpers/utils';



interface Props {
  tableName: string; // Especifica el tipo de la prop 'tableName'
}


export default function CreateButton({tableName}:Props) {

  const[link,setLink]  = useState("")

  useEffect(() => {
    console.log(tableName)
    let link = Utils.createLink(tableName);
    setLink(link);
  }, [tableName])

  return (
    <div className={style.general_container}>
        <Link className={style.button} href={link}>
            Crear
        </Link>
        <button className={style.button}>
            Buscar
        </button>
        <input type="search"  className={style.input_search}></input>
    </div>
  )
}
