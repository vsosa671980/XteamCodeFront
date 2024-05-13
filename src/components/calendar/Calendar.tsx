import style from "./calendar.module.css";
import GeneralMenuComponent from '../GeneralMenu/GeneralMenuComponent';
import React, { useEffect, useRef, useState } from 'react';
import CreateButton from "../createElements/CreateButton";

export default function Calendar() {

    const [statusButton, setStatusButton] = useState("assist");
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const [selectedTraining, setSelectedTraining] = useState("")
    const [entrenes, setEntrenes] = useState([]);
    const actualDay = new Date().toISOString().split("T")[0];
    console.log(actualDay)
    const [date, SetDate] = useState(actualDay);
    const [week, setWeek] = useState<[string, unknown][]>([]);
  

    const handleWeek = (week: any) => {
        setWeek(week);
    }

    const handleDay = (e: any) => {
        SetDate(e.target.value)
        console.log(e.target.value)
    }

    useEffect(() => {
        console.log(date)
        console.log(week)
        fetch("http://localhost:8000/training/filterBydate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date })
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    console.log(data.trainings.training)
                    console.log(data.trainings.week)
                    let training = data.trainings.training
                    setEntrenes(training)
                    let week = data.trainings.week
                    let weekArray = Object.entries(week)
                    setWeek(weekArray)
                }
            })
    }, [date]);

    // MODAL DEFINITION
    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }
    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    }

    // HANDLEREGISTRATION
    const HandleRegistration = () => {
        console.log(selectedTraining);
    }

    const HandleTraining = (e: any) => {
        if (statusButton === "assist") {
            openModal();
            setSelectedTraining(e.target.value);
        }
    }

    const calculateDay = (date: string) => {
        let dayWeek = new Date(date).getDay();
        let dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]; // Modificado "Miercoles" a "Miércoles"
        let calculateDay = dayNames[dayWeek];
        return calculateDay;
    }

 

    return (
        <>
            <GeneralMenuComponent />
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
                                                    <button className={statusButton === "assist" ? style.button_assist : style.button_cancel} onClick={HandleTraining} value={entrene.idTraining}>
                                                     {statusButton === "assist" ? "Asistir" : "Reservado"}
                                                   </button>
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
                        <p>¿Confirmas la asistencia?</p>
                    </div>
                    <div className={style.container_buttons_modal}>
                        <button className={style.button_cancel} onClick={closeModal}>Por ahora no</button>
                        <button className={style.button_assist} onClick={HandleRegistration} value={selectedTraining}>¡Vamos!</button>
                    </div>
                </dialog>
            </div>
        </>
    )
}
