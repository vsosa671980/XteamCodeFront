import CreateForm from '@/components/CreateElelemtsForm/CreateForm'
import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import React, { useState ,useRef, useEffect} from 'react'
import { useRouter } from 'next/router';
import { ServerResponse } from 'http';
import Created from '@/components/ModalAdvices/Created';


export default function CreateSubscription() {
  
  interface ServerResponse {
    response: string; 
    status:string;
    message:string// ajusta el tipo según lo que esperas que sea la propiedad 'response'
    // Otros campos si los hay
  }
  //Url for sending data to the server
    const url = "http://localhost:8000/subscription/create"

  const [responseFromServer,SetResponseFromServer] = useState<ServerResponse>()
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const router  = useRouter();

  let modal  = modalRef.current

  const openModal = () =>{
    modal?.showModal()
  }
  const returnList = () => {
    let modal  = modalRef.current
    modal?.close()
    router.push("/subcriptions/listsubcriptions")
  }
  const hanldeResponseFromServer = ((response:ServerResponse) => {
    SetResponseFromServer(response)
  })
   // Elements for creating a subscription form element
    const data = ["title", "price","description1","description2",
    "description3","description4","description5"];
  
  // Title for creating a subscription Form and indicate the type of it
    const formName ="Subcriptions"
  //Create reference for choosing  modal dialog

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
function async(arg0: (response: ServerResponse) => void) {
  throw new Error('Function not implemented.');
}

