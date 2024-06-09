import { UpdateFormContext } from '@/Context/UserContext';
import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent';
import React, { useContext, useEffect, useState } from 'react'
import style from  "../../components/GeneralTables/GeneralTables.module.css"
import { sendDataToServer } from '@/hooks/SendDataToServer';

interface training {
    [key: string]: string;
}
interface Users{
    name:string,
    surname:string,
    age:number
}

export default function Training() {

 const contextForm = useContext(UpdateFormContext);
 const training:training =contextForm.data
 const datos = Object.keys(contextForm.data);
 const [listUser,setListUser] = useState<Users[]>([]);

 const url = "http://localhost:8000/trainings/trainingUsers";

 useEffect(() => {
       const getUsers =async  () => {
        let idTraining = {
            id:training.id
       }
        const usersList = await sendDataToServer(url,idTraining)
        setListUser(usersList.users)
    
       }
       getUsers()
 },[])

 // find the user of the training
 console.log(listUser)

 const datosFiltered = datos.filter(datos => {
      if (datos !== "id" && datos !== "img") {
        return datos;
      }
 })

 console.log("Soy el contexto",contextForm.data)
  return (
    <div>
     <GeneralMenuComponent></GeneralMenuComponent>   
    <div>
        <h1>Entrenamiento</h1>
        <table className={style.table}>
            <th className={style.th}>
                <tr>
                    <th className={style.th}>Type</th>
                    <th className={style.th}>Date</th>
                    <th className={style.th}>Location</th>
                    <th className={style.th}>Descripcion</th>
                </tr>
            </th>
            <tbody>
                <tr>
                {
                    datosFiltered.map((key, index) => (
                            <td className={style.td}>{training[key]}</td>
                    ))
                }
                </tr>
            </tbody>
        </table>
        <div>
            <h1>Asistenetes</h1>
        </div>
        <table>
            <th className={style.th}>
                <tr>
                    <th className={style.th}>Type</th>
                    <th className={style.th}>Date</th>
                    <th className={style.th}>Location</th>
                    <th className={style.th}>Descripcion</th>
                </tr>
            </th>
            <tbody>
                
                {
                    listUser?.map((user, index) => (
                        <tr key={index}>
                            <td className={style.td}>{user.name}</td>
                            <td className={style.td}>{user.surname}</td>
                            <td className={style.td}>{user.age}</td>
                         
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>  
    </div>
  )
}
