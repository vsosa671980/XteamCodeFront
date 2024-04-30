import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import CreateButton from '@/components/createElements/CreateButton'
import GenerateTable from '@/hooks/GenerateTable'
import React from 'react'
import datos from "./subcriptions.json"

export default function listsubcriptions() {
    const tableName:string = "Subscriptions"

    const data = datos.datos
    const jsonData = JSON.parse(JSON.stringify(data));
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
            {GenerateTable.create(jsonData,imgActive,tableName)}

        </div>
      
    </div>
  )
}
