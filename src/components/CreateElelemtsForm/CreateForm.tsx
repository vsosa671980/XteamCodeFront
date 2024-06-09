import React, { ReactNode, useState } from 'react'
import GeneralMenuComponent from '../GeneralMenu/GeneralMenuComponent'
import style from "./createform.module.css"
import Created from '../ModalAdvices/Created';
import { handleSendData } from '@/helpers/sendDataForCreate'
import { sendDataToServer } from '@/hooks/SendDataToServer';
import { serialize } from 'v8';


interface Props<T> {
    data: T[];
    title:string// Usamos el tipo genérico T para definir el tipo del array
    receivedData:any
    url:string //
    object:Record<string, any>;
}

export default function CreateForm<T extends ReactNode>({ data,title,receivedData,url,object}: Props<T>) {
    
   

    const [defaultObject,setDefaultObject] = useState (object);
   

  
  

    const handelSubmitForm =async (event: { preventDefault: () => void; target: any; })=>
        {
         // Remove the normal shape of the form
         event.preventDefault()
        
         //Create a new formFataObject
         const formData = new FormData(event.target)
         //Create Object empty
         let object: { [key: string]: any } = {}; 
         //Obtein the key(name, value) of each input for creating the object
         formData.forEach((value, key) => {
             object[key] = value
             
         })

         if(defaultObject.id){
            object = {
                id:defaultObject.id,
                dataObject:object
            }

          
         }
         //Call the received Function passing url and Object
         //Send the data to server
         const response = await sendDataToServer(url,object)
         //Call the received Function passing url and Object
         console.log(response)
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
                                       <textarea id={item?.toString()} className={style.input} name={item?.toString()}  defaultValue={object[item?.toString() as string]}></textarea> :
                                       <input type="text" id={item?.toString()} className={style.input} name={item?.toString()}  defaultValue={defaultObject[item?.toString() as string]}/>}
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                    <div>
                        {defaultObject.id ? <button type="submit" className={style.button}>Actualizar</button>
                        :<button type="submit" className={style.button}>Crear</button>}
                    </div>
                </form>
            </div>
        </div>

    

    )
}

