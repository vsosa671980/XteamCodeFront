import CreateForm from '@/components/CreateElelemtsForm/CreateForm'
import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import Created from '@/components/ModalAdvices/Created';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'

export default function CreateCompetition() {

   // URL del servidor
   const url:string = 'http://localhost:8000/competitions/create';
   const router  = useRouter();

   const [responseFromServer,SetResponseFromServer] = useState<ServerResponse>()
   const modalRef = useRef<HTMLDialogElement | null>(null);

   let modal  = modalRef.current

    const openModal = () =>{
      modal?.showModal()
    }
    const returnList = () => {
      let modal  = modalRef.current
      modal?.close()
      router.push("/competitions/ListCompetitions")
    }

    const hanldeResponseFromServer = ((response:ServerResponse) => {
      SetResponseFromServer(response)
    })

    const data = [
        "Tipo","Fecha","img","localizacion","descripcion"]

    const formName ="Competitions"
    
  return (
    <div>
      <GeneralMenuComponent />
        <CreateForm data = {data} title={formName} receivedData = {hanldeResponseFromServer} url = {url}/>
         <dialog ref={modalRef} title="Created" >
            <Created closeModal={returnList} />
          </dialog> 
       
    </div>
  )
}
