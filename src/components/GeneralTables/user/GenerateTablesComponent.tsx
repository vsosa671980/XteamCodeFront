import React, { useContext, useEffect, useState } from 'react';
import style from "../GeneralTables.module.css"
import Link from 'next/link';
import Pagination from '../../pagination/Pagination'
import { sendDataToServer } from '@/hooks/SendDataToServer';
import { useRouter } from 'next/router';
import { UpdateFormContext } from '@/Context/UserContext';

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
    tableName:tableName;
    lastPage:number;
    getPage:any;
    totalPages:number;
}
export default function GeneralTablesComponent<T extends Record<string, any>>({data,buttons,tableName,lastPage,getPage,totalPages}: Props<T>){
    if (!data || data.length === 0) {
        return <div>No hay datos disponibles.</div>;
    }
    //Object router
    const router = useRouter()
    //Return array with oll the keys of the object
    const keys = Object.keys(data[0])  
    //Get the context for pass the values of form
    const contextForm = useContext(UpdateFormContext);

  
    // Function to update the data
    const updateData = async (event:React.MouseEvent<HTMLButtonElement>) =>{
        if(event){
            let idData = event.currentTarget.id
            let id = {
                id:idData,
            }
            console.log(id)
            const url = `http://localhost:8000/users/findById`;
            // Get the object from database
            const object =await sendDataToServer(url,id)
            
            contextForm.setUpdateForm(object);
            router.push(`/user/create`)
           }   
        }
       /*
       * Delete the object from database
       */
       const deleteData = (event:React.MouseEvent<HTMLButtonElement>) =>{
        if(event){
            let idData = event.currentTarget.id
            let id = {
                id:idData
            }
            console.log(idData)
            callServerToDeleteData(id)
           }   
        }

        const [img,setImg] = useState("")

        const handleImg  =  (traingName:string) => {
            console.log(traingName)
               
        }
        //handleImg();
        
    // Call to the server 
    // Set the url 
    const url = `http://localhost:8000/${tableName}/delete`;

    const callServerToDeleteData = async (idData:object) => {
        const response =await sendDataToServer(url,idData)
        if(response.status ==="error"){

        }else{
            
        }
    }
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
                                      {key === "estado" ? (
                                      <img src={item[key as keyof T] === "active" ? buttons[0].active : buttons[0].inactive} 
                                      className={style.img_status} alt={item[key as keyof T]} /> 
                                       ) : key ==="img" ? (
                                        <img src={img} className={style.imgTrain} ></img> ):( item[key as keyof T])}
                                </td> 
                            ))}
                            <td className={style.td}>
                            <button id= {item.id} onClick={updateData}>
                              <img src="/assets/img/actualizar.svg" className={style.img_changes}></img>
                            </button>
                           
                            </td>
                            {
                               tableName.name !== "users" ? <td className={style.td}>
                                  <button id={item.id} onClick={deleteData}>
                                     <img src="/assets/img/Eliminar.svg" className={style.img_changes}></img>
                                  </button>
                                </td> : null
                             }
                        </tr>
                    ))}
                  
                </tbody>
            </table>
            <Pagination lastPage = {lastPage} getPage= {getPage} totalPages = {totalPages}/>
        </div>
    );
}
