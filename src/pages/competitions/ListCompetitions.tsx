import React from 'react'
import datos from  "./competitions.json"
import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import GenerateTable from '@/hooks/GenerateTable'
export default function ListCompetitions() {
   
    const tableName:string = "Competitions"
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
        <div>
            {GenerateTable.create(jsonData,imgActive,tableName)}

        </div>
      
    </div>
  )
}
