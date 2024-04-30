import CreateForm from '@/components/CreateElelemtsForm/CreateForm'
import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import React, { useState } from 'react'

export default function CreateTraining() {

    const [trainingData,setTrainingData] = useState(null)

    const handleUser = (dataTraing:any) => {
      setTrainingData(dataTraing)
    }

    const data = [
        "type","date","description","location","img"
    ]
  return (
    <div>
        <GeneralMenuComponent />
        <CreateForm data = {data} title="Entrenamientos" receivedData = {handleUser}/>
    </div>
  )

}