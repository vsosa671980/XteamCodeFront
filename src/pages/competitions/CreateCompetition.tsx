import CreateForm from '@/components/CreateElelemtsForm/CreateForm'
import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import React from 'react'

export default function CreateCompetition() {

    const data = [
        "Tipo","Fecha","img","localizacion","descripcion"]

    const formName ="Competitions"
    
  return (
    <div>
        <GeneralMenuComponent />
        <CreateForm data = {data} title ={formName}/>
    </div>
  )
}
