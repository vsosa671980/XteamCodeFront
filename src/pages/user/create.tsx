import CreateForm from '@/components/CreateElelemtsForm/CreateForm'
import GeneralMenuComponent from '@/components/GeneralMenu/GeneralMenuComponent'
import React, { useState ,useRef,useEffect, useContext} from 'react'
import { useRouter } from 'next/router';
import Created from '@/components/ModalAdvices/Created';
import { UpdateFormContext } from '@/Context/UserContext';


export default function CreateUser() {
      
    //let url:string = "http://localhost:8000/trainings/create"
    let url =""
  
    // Object router
    const router  = useRouter();
    // Response from server
    const [responseFromServer,SetResponseFromServer] = useState<ServerResponse>()
    // Modal 
    const modalRef = useRef<HTMLDialogElement | null>(null);
    // Get the context of form when is updated 
    const contextForm = useContext(UpdateFormContext);

    const[messageModal,setMessageModal] = useState("")

   
    useEffect(() => {
      if(Object.keys(contextForm.data).length === 0) {
        setMessageModal("Creado")
     }else{
        setMessageModal("Actualizado")
     }
    },[])

    let object = {}   
    if (Object.keys(contextForm.data).length !== 0 ){
      object = contextForm.data 
      url = "http://localhost:8000/users/update" 
    }

    let modal  = modalRef.current
   // MODAL ACTIONS
    const openModal = () =>{
      modal?.showModal()
    }
    const returnList = () => {
      let modal  = modalRef.current
      modal?.close()
      router.push("/user/list")
    }
    // Set the response gotten from the server
    const hanldeResponseFromServer = ((response:ServerResponse) => {
      SetResponseFromServer(response)
    })
    // Elements for creating a training form element of the table
    const data = [
        "name","surname","secondSurname","email","phone","status"
    ]
    // Title for creating a training Form and indicate the type of it
    const formName ="users";

    useEffect(() => {
      if (responseFromServer?.status === "success") {
        openModal()
      }
    }, [responseFromServer]);

  return (
    <div>
        <GeneralMenuComponent />
        <CreateForm data = {data} title={formName} receivedData = {hanldeResponseFromServer} url = {url} object ={object} />
         <dialog ref={modalRef} title="Created" >
            <Created closeModal = {returnList}  message={messageModal}/>
          </dialog> 
    </div>
  )

}