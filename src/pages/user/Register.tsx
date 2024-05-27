import Created from '@/components/ModalAdvices/Created'
import RegisterUserComponent from '@/components/RegisterUser/RegisterUserComponent'
import { sendDataToServer } from '@/hooks/SendDataToServer'
import React, { useEffect, useState ,useRef} from 'react'
import { useRouter } from 'next/router';
import {ServerResponse} from "../../interfaces/ServerResponse"

export default function Register() {

  const [data, setData] = React.useState({})
  const url = "http://localhost:8000/user/crear"
  const [response, setResponse] = useState<ServerResponse| null>(null);
  const router = useRouter();

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    if(modalRef.current){
      modalRef.current.showModal()
    }
  }

  const closeModal = () => {
    if(modalRef.current){
      modalRef.current.close()
      router.push("/")
    }
  }
  /*
  * Send the data received from the client and send it to the server
  * @param {datareceived} object:User
  * 
  */
  const getData = (dataReceived:object) => {
    //Set the data of user received
       setData(dataReceived)
  }  
  
  useEffect(() => {
    const sendData = async () => {
      // Send data to server to save in the database
      const response:ServerResponse = await sendDataToServer(url, data);
      // Check the response
      setResponse(response);
      // Check if the response threw an error
      // Check the response from the server
      if (response) {
        // Create the response object error
        const responseStatus = {
          status: response.status,
          message: response.message,
        };
        setResponse(responseStatus);
      }
    };
    // Check if data has object
    if (Object.keys(data).length > 0) {
      sendData();
    }
  }, [data]);
      
  return (
    <div>
       <RegisterUserComponent getData={getData} response={response} openModal={openModal}/>
       <dialog ref={modalRef} >
        <Created closeModal = {closeModal} message ="Enviado verificacion a correo , revisa tu buzon" />
        </dialog>
        <dialog >
       </dialog>
    </div>
  )
}
