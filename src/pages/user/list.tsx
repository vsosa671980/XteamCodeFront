import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import GeneralTablesComponent from '@/components/GeneralTables/GeneralTablesComponent'
import React, { useEffect, useState } from 'react'
import GenerateTable from "../../components/GeneralTables/user/GenerateTableUser"
import { create } from 'domain'
import CreateButton from '@/components/createElements/CreateButton'
import { sendDataToServer } from '@/hooks/SendDataToServer'

export default function users() {

  const[users,setUsers] = useState<User[]>([]);

  const url = "http://localhost:8000/users/listPaginates"
  
  const tableName = "users";

  //Actual page list
  const [actualPage,setActualPage] = useState(1);
  const [totalPages,setTotalPages] = useState<number>(0);


//Call the API to get the trainings
const getPageRequestedFromPagination = (page:number) => {
  setActualPage(page);
}
//Call the API to get the trainings
useEffect (() =>{
const page = {
  numberPage : actualPage
}
const getUsers = async() => {
    const users =await sendDataToServer(url, page)
    console.log(users)
    setUsers(users.users)
    if (users.totalPages) {
      setTotalPages(users.totalPages )
    }
}
getUsers();
},[actualPage]);

const imgActive = [
  {
    active:"/assets/img/activo.png",
    inactive:"/assets/img/baja.png"
  }
]

  return (
    <div>
    <GeneralMenuComponent />
    <CreateButton tableName={tableName}/>
    <div>
    <GenerateTable
      data={users}
      buttons={imgActive}
      tableName={tableName}
      totalPages={totalPages}
      getPageRequestedFromPagination={getPageRequestedFromPagination}
    />
    </div>
</div>
  )
}
