import style from "./calendar.module.css";
import GeneralMenuComponent from '../GeneralMenu/GeneralMenuComponent';
import React, { useContext, useEffect, useRef, useState } from 'react';
import CreateButton from "../createElements/CreateButton";
import {UserContext } from '@/Context/UserContext';
import { Authentication } from "@/helpers/Authentification";
import { TokenPayload } from "@/interfaces/payloadToken";
import { sendDataToServer } from "@/hooks/SendDataToServer";
import Created from "../ModalAdvices/Created";
import loading from "../loading/Loading";
import { ColorRing } from 'react-loader-spinner';
import { Router } from "next/router";
import Training from "@/pages/trainings/training";

export default function Calendar() {

    const [statusButtonOrder,setStatusButtonOrder] = useState(true);
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const [selectedTraining, setSelectedTraining] = useState("")
    const [entrenes, setEntrenes] = useState([]);
    const actualDay = new Date().toISOString().split("T")[0];
    const [date, SetDate] = useState(actualDay);
    const [week, setWeek] = useState<[string, unknown][]>([]);
    const [userLogged,setUserLogged] = useState<TokenPayload | null>(null) 
    const [messageModal, setMessageModal] = useState("Comfirmas la asistencia");
    const [visible, setVisible] = useState(false);
    const [messageCloseModal,setMessageCloseModal] = useState("Por ahora no ")
    const [showButton, setShowButton] = useState(true);
    const [opcionActionButton, setOpcionActionButton] = useState("")

    const urlToSaveTrainingUser = "http://localhost:8000/trainings/insertUserTraining"
    const urlToDeleteTrainingUser = "http://localhost:8000/trainings/deleteUserFromTrain"

    const getUSerLogged =async () => {
       const userLogged = await  Authentication.getUser()
       setUserLogged(userLogged)
    }

  const resetStatesDefault =  () => {
    setMessageModal("Comfirmas la asistencia")
    setShowButton(true)
    setVisible(false)
  }

useEffect(() => {
    getUSerLogged()
},[])

console.log(userLogged?.id)

    const handleWeek = (week: any) => {
        setWeek(week);
    }
    const handleDay = (e: any) => {
        SetDate(e.target.value)
        console.log(e.target.value)
    }

    const handleEntrenes = async () => {
        const url = "http://localhost:8000/trainings/filterBydate"
        const fecha = {
            date: date
        }
        const trainingResponse = await sendDataToServer(url,fecha)
        setEntrenes(trainingResponse.trainings.training)
    }
    // Do call to server for get the training between the actual date
    useEffect(() => {
        fetch("http://localhost:8000/trainings/filterBydate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date })
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    console.log("Datos",data)
                    console.log("SEMENA",data.trainings.week)
                    let training = data.trainings.training
                    setEntrenes(training)
                    let week = data.trainings.week
                    let weekArray = Object.entries(week)
                    setWeek(weekArray)
                    // Figure out if the user has the training order
                }
            })
    }, [date]);

    const handleStatusButtonOrdered =  (status:boolean) => {
        setStatusButtonOrder(false);
          
    }

    // MODAL DEFINITION
    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }
    const closeModal = () => {
        if (modalRef.current) {
            resetStatesDefault();
            modalRef.current.close();
        }
    }



    // HANDLEREGISTRATION
    const HandleRegistration =async  (event:any) => {
        // Save the train Id 
        const trainingId = event.target.value;
   
        // Set the id of user Log
        const userId = userLogged?.id
        // Send data to server to save Training/User
        const data = {
            userId : userId,
            trainingId: trainingId
        }
             // send data to server
        const response = await sendDataToServer(urlToSaveTrainingUser, data);
        // Check the reponse
        setVisible(true)
        setShowButton(false);
        const timeout = setTimeout (() => {
          setVisible(false)
          if (response.status === "success") {
            setMessageModal("Entrenamiento reservado");
            setMessageCloseModal("Cerrar")
            handleEntrenes()
            
          }else{
            setMessageModal("No se ha podido reservar el entrenamiento");
            setMessageCloseModal("Cerrar")
          }
        },2000)
        }
        
    const handleDeleteRegistration =async  (event:any) => {
         // Save the train Id 
         const trainingId = event.target.value;
         // Set the id of user Log
         const userId = userLogged?.id
         // Send data to server to save Training/User
         const data = {
             userId : userId,
             trainingId: trainingId
         }

         console.log("data",data)
         // call the server to delete Training od database
             const response = await sendDataToServer(urlToDeleteTrainingUser,data)
             setVisible(true)
             setShowButton(false);

             const timeout = setTimeout(() => {
                setVisible(false)
                if(response.status === "success") {
                    setMessageModal("Entrenamiento eliminado")
                    setMessageCloseModal("Cerrar")
                    setOpcionActionButton("insert")
                    handleEntrenes()
                }else{
                    console.log(response)
                    setMessageModal("No se ha podido eliminar el entrenamiento");
                    setMessageCloseModal("Cerrar")
                }
             },2000)
            }


    const HandleTraining = (e: any) => {
            openModal();
            setSelectedTraining(e.target.value);
    }

    const HandleDeleteTraining = (e: any) => {
        setMessageModal("Quieres eliminar el entrenamiento")
        setSelectedTraining(e.target.value);
        setOpcionActionButton("delete")
        openModal()
    }

    const calculateDay = (date: string) => {
        let dayWeek = new Date(date).getDay();
        let dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]; // Modificado "Miercoles" a "Miércoles"
        let calculateDay = dayNames[dayWeek];
        return calculateDay;
    }

    return (
        <>
         
            <div className={style.container_calendar}>
                <input type="date" className={style.calendar} value={date} onChange={handleDay} name="date" />
            </div>
            <div className={style.container_card_general}>
                {
                    week.map((value, weekIndex) => {
                        return (
                            <div key={weekIndex} className={style.container_card}>
                                <div className={style.container_card_text}>
                                    <div className={style.container_day_text}>
                                        <h1>{value[0]}</h1>
                                        <ul className={style.ul}>
                                            <li>{value[1]}</li>
                                        </ul>
                                    </div>
                                    <hr></hr>
                                    {entrenes.map((entrene, entreneIndex) => (
                                        <div key={entreneIndex} className={style.container_data_train}>
                                            {value[1] === entrene.date ? (
                                            <>
                                                <ul className={style.ul}>
                                                    <li className={style.card_type}>{entrene.type}</li>
                                                    <li className={style.card_type}>{entrene.type}</li>
                                                    <li>{entrene.location}</li>
                                                    <li className={style.card_type}>{entrene.type}</li>
                                                    <div className={style.container_description}>
                                                        <li>{entrene.description}</li>
                                                    </div>
                                                </ul>
                                                <div className={style.container_button}>
                                                    <div>
                                                    {entrene.status === "free" ? (<button className={style.button_assist} value={entrene.id} onClick={HandleTraining }>Entrenar</button >):(null)}
                                                   
                                                   {entrene.status === "ordered" ? (<button className={style.button_cancel} value= {entrene.id} onClick={HandleDeleteTraining }>Reservado</button>):(null)}

                                                    </div>
                                                  
                                                </div>
                                            </>    
                                            ) : null}
                                        </div>
                                    ))}
                                </div>
                            
                                <div className={style.container_img}>
                        
                                    <img src="/assets/img/imagen.jpg" alt="" className={style.img_container} />
                                </div>
                             
                            </div>
                        );
                    })}
              
                <dialog className={style.container_modal} ref={modalRef}>
                    <div>
                        <h1>Confirmación</h1>
                        <p>{messageModal}</p>
                    </div>
                    <div className={style.container_loader}>
              <ColorRing
               visible={visible}
               height="80"
               width="80"
               ariaLabel="color-ring-loading"
               wrapperStyle={{}}
               wrapperClass="color-ring-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />

            </div>
                    <div className={style.container_buttons_modal}>
                    <button className={style.button_cancel} onClick={closeModal} >{messageCloseModal}</button>
                    
                        
                    {opcionActionButton === "delete" ? (
                        <button className={style.button_assist} onClick={handleDeleteRegistration} value={selectedTraining}>
                         Si, mejor otro día
                        </button>
                     ) : (
                    showButton && (
                   <button className={style.button_assist} onClick={HandleRegistration} value={selectedTraining}>
                     ¡Vamos!
                  </button>
                 )
                )}

                    </div>
                </dialog>
            </div>
        </>
    )
}
