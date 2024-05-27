import CreateForm from '@/components/CreateElelemtsForm/CreateForm'
import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import React, { useState ,useRef,useEffect} from 'react'
import { useRouter } from 'next/router';
import style  from "./createTrainf.module.css"
import Created from '@/components/ModalAdvices/Created';


export default function CreateTraining() {

    // URL del servidor
    const url:string = 'http://localhost:8000/training/create';
    const router  = useRouter();
    // Configurar la solicitud Fetch
    const [responseFromServer,SetResponseFromServer] = useState<ServerResponse>()
    const modalRef = useRef<HTMLDialogElement | null>(null);

    let modal  = modalRef.current

    const openModal = () =>{
      modal?.showModal()
    }
    const returnList = () => {
      let modal  = modalRef.current
      modal?.close()
      router.push("/trainings/ListTraings")
    }

    const hanldeResponseFromServer = ((response:ServerResponse) => {
      SetResponseFromServer(response)
    })

    const data = [
        "type","date","description","location","img"
    ]

    const formName ="Trainings"

    useEffect(() => {
      console.log(responseFromServer)
      if (responseFromServer && responseFromServer.response === "ok") {
        openModal()
        console.log("entro en al condicion")
      }
    }, [responseFromServer]);


  return (
    <div>
        <GeneralMenuComponent />
        <CreateForm data = {data} title={formName} receivedData = {hanldeResponseFromServer} url = {url}/>
         <dialog ref={modalRef} title="Created" >
            <Created closeModal = {returnList} />
          </dialog> 
    </div>
  )

}