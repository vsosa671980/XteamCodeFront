import React, { useEffect, useState } from 'react'
import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import GenerateTable from '@/hooks/GenerateTable'
import CreateButton from '@/components/createElements/CreateButton'
import { sendDataToServer } from '@/hooks/SendDataToServer'
import {Trainings} from "../../interfaces/trainings";
import Calendar from '@/components/calendar/Calendar'
export default function ListTraings() {

  //Create state of Trainings 
  const [trainings,setTrainings] = useState<Trainings[]>([]);
  //Url Name
  const url = "http://localhost:8000/trainings/listPaginates"
  // Table Name
  const tableName = "trainings"
  //Actual page list
  const [actualPage,setActualPage] = useState(1);
  const [totalPages,setTotalPages] = useState<number>(0);
     //Get the context for pass the values of form

  const user = "user";



  const getPageRequestedFromPagination = (page:number) => {
      setActualPage(page);
      console.log("pagina que revibo,",page);
  }
  //Call the API to get the trainings
  useEffect (() =>{
    const page = {
      numberPage : actualPage
    }
    const getTraining = async() => {
        const training =await sendDataToServer(url, page)
        setTrainings(training.training)
        if (training.totalPages) {
          setTotalPages(training.totalPages )
        }
    }

    getTraining();
  },[actualPage]);

useEffect (( ) =>{

},[trainings])

  const imgActive = [
    {
      active:"/assets/img/activo.png",
      inactive:"/assets/img/baja.png"
    }
  ]

  return (    
    <div>
       
        <div>
        {user === "user" ? (
          <div>
            <GeneralMenuComponent />
            <Calendar ></Calendar>
          </div>
        ):(
          <div>
          <GeneralMenuComponent />
          <CreateButton tableName={tableName}/>
          <GenerateTable
          data={trainings}
          buttons={imgActive}
          tableName={tableName}
          totalPages={totalPages}
          getPageRequestedFromPagination={getPageRequestedFromPagination}
        />
        </div>

        )   
      }
        </div>
    </div>
  )
}
