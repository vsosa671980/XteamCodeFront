import CreateForm from '@/components/CreateElelemtsForm/CreateForm'
import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import React from 'react'

export default function CreateSubscription() {

    const data = [
        "Descripcion1","Descripcion2","Descripcion3","Descripcion4","Descripcion5",
    "Precio","Titulo"]

    const formName ="Subcriptions"
    
  return (
    <div>
          <GeneralMenuComponent />
        <CreateForm data = {data} title ={formName}/>
      
    </div>
  )
}
