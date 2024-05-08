import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import CreateButton from '@/components/createElements/CreateButton'
import GenerateTable from '@/hooks/GenerateTable'
import React, { useEffect, useState } from 'react'
import datos from "./subcriptions.json"
import {receivedData} from "../../helpers/recievedataFecth";

export default function listsubcriptions() {

    const tableName:string = "Subscriptions"

    const url = "http://localhost:8000/subscription/list"

    const [subscriptions,setSubscriptions] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await receivedData(url);
              setSubscriptions(data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
  
      fetchData();
  },[url, receivedData] ); 

    //const jsonData = receivedData(url)
    const imgActive = [
      {
        active:"/assets/img/activo.png",
        inactive:"/assets/img/baja.png"
      }
    ]
  return (
    <div>

<GeneralMenuComponent />
        <CreateButton tableName={tableName} />
        <div>
            {GenerateTable.create(subscriptions,imgActive,tableName)}

        </div>
      
    </div>
  )
}
