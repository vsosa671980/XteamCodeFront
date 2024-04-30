import React, { ReactNode, useState } from 'react'
import GeneralMenuComponent from '../GeneralMenu/GeneralMenuComponent'
import style from "./createform.module.css"


interface Props<T> {
    data: T[];
    title:string// Usamos el tipo genérico T para definir el tipo del array
    receivedData:any
}

export default function CreateForm<T extends ReactNode>({ data,title }: Props<T>) {

    const [dataFrom,setDataForm] = useState("");

    const handelSubmitForm = (event: { preventDefault: () => void; target: any; })=>
        {
         event.preventDefault()
         const formData = new FormData(event.target)
         //Create and variable with types
         const object: { [key: string]: any } = {}; 
         //Obtein the key(name, value) of each input
         formData.forEach((value, key) => {
             object[key] = value
         })
         
    }

    return ( 
        <div>
        
            <div className={style.general_container}>
                <h1 className={style.title_form}>{title}</h1>
                <form className={style.form_container} id="Form" onSubmit={handelSubmitForm}>
                    {
                        data.map((item: T, index: number) => {
                            return (
                                <div key={index} className={style.container_inputs}>
                                    <div className={style.container_label} >
                                         <label htmlFor={item?.toString()}>{item}</label >
                                    </div>
                                    <div>
                                       <input type="text" id={item?.toString()} className={style.input} name={item?.toString()}/>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }

                    <div>
                        <button type="submit" className={style.button}>Crear</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

function receivedData(nuevosDatos: string) {
    throw new Error('Function not implemented.');
}

