import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import GeneralTablesComponent from '@/components/GeneralTables/GeneralTablesComponent'
import React from 'react'
import GenerateTable from '@/hooks/GenerateTable'
import { create } from 'domain'

export default function users() {
  


  
  

  const usersList = [
    {name:"Vicente",
     surname:"Sosa",
     email:"ejemplo@gmail.com",
     password:"codificado",
     estado:"Activo"
    } ,
    {name:"Ruben",
    surname:"Sosa",
    email:"ejemplo@gmail.com",
    password:"Codificado",
    estado:"Activo"
   } ,
   {name:"Susana",
   surname:"Sosa",
   email:"ejemplo@gmail.com",
   password:"Codificado",
   estado:"Activo"
  } ,
  {name:"Erika",
  surname:"Sosa",
  email:"ejemplo@gmail.com",
  password:"Codificado",
  estado:"active"
 } ,
 {name:"Vicente",
 surname:"Sosa",
 email:"Ejemplo@gmail.com",
 password:"Codificado",
 estado:"Activo"
} ,   
]

const imgActive = [
  {
    active:"/assets/img/activo.png",
    inactive:"/assets/img/baja.png"
  }
]

const tableName = {
  name:"otra"
}

  return (
    <div>
        <GeneralMenuComponent />
        <div>
           {GenerateTable.create(usersList,imgActive,tableName)}
        </div>

    </div>
  )
}
