import React, { ReactNode, useState } from 'react'
import GeneralMenuComponent from '../GeneralMenu/GeneralMenuComponent'
import style from "./createform.module.css"
import Created from '../ModalAdvices/Created';
import { handleSendData } from '@/helpers/sendDataForCreate'


interface Props<T> {
    data: T[];
    title:string// Usamos el tipo genérico T para definir el tipo del array
    receivedData:any
    url:string //
}

export default function CreateForm<T extends ReactNode>({ data,title,receivedData,url}: Props<T>) {

    const handelSubmitForm =async (event: { preventDefault: () => void; target: any; })=>
        {
         // Remove the normal shape of the form
         event.preventDefault()
         //Create a new formFataObject
         const formData = new FormData(event.target)
         //Create Object empty
         const object: { [key: string]: any } = {}; 
         //Obtein the key(name, value) of each input for creating the object
         formData.forEach((value, key) => {
             object[key] = value
          
             
         })
         //Call the received Function passing url and Object
         //Send the data to server
         const response = await handleSendData(url,object)
         //Call the received Function passing url and Object
         receivedData(response)
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
                                       { item === "description"? 
                                       <textarea id={item?.toString()} className={style.input} name={item?.toString()}></textarea> :
                                       <input type="text" id={item?.toString()} className={style.input} name={item?.toString()}/>}
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

