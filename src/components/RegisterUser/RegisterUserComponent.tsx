import React, { Component, useEffect, useState } from 'react'
import style from "./registerUser.module.css";
import Loading from '../loading/Loading';
import {ServerResponse} from "../../interfaces/ServerResponse"

interface ErrorObject {
    [key: string]: string
}

interface RegisterUserComponentProps {
    getData: (dataReceived: {}) => void; 
    response?:ServerResponse | null ;
    openModal:() => void;
  }

  
export default function RegisterUserComponent({getData,response,openModal}: RegisterUserComponentProps) {
     //States 
    const [newUser,setNewUSer] = useState({});
    const [ErrorForm,setErrorForm] = useState<ErrorObject>({});
    const [statusLoading,setStatusLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const errors:string[] = [];
    
    //Handle creation of new user
    const handelNewUSer = (event:any) => {
        //Create the object of errors
        const error:ErrorObject= {}
        // Remove the comportment for defect of the form 
        event.preventDefault();
        //create the new FormDataObject
        const formData = new FormData(event.target)
        //Check id password and the repeat password match
        if (formData.get("password") !== formData.get("repeatPassword")) {
            //Add the error to the error Object
            error["repeatPassword"] = "Las contraseñas no coinciden";
        }
        //Check if email and email verification match
        if(formData.get("email") !== formData.get("mailverification")){
            //Add the error to the error Object
            error["email"] = "Email incorrect"
            setErrorForm(error);
        }
        //Create object  and set it to ErrorForm
         setErrorForm(error)
        //Check if are not errors in ErrorForm 
        if(Object.keys(ErrorForm).length === 0){
                //Create the object
            const user: { [key: string]: any } = {}; 
        //Get the key and the value from the form
            formData.forEach((value, key) => {
             if (value !== "mailverification" &&  value !== "repeatPassword") {
                user[key] = value
             }
        })
        setNewUSer(user)
        //Set the user as submitted
        setIsSubmitted(true); 
        //Send the data to Created Component with prop
        }
    }

    /*
    * Check if there are errors and show the modal instead
    *
    */
    useEffect(() => {    
        if(response){
            if (response?.status === "error") {
                const error: ErrorObject = {general : response.message };
                setErrorForm(error);
                console.log(response.message);
            }
            if(response?.status === "success"){
                 //Set the object to newUse
            openModal()
            }
        }
    },[response])
       
    useEffect(() => {
        if (isSubmitted) {
            getData(newUser)
            console.log("New User:", newUser);
            setIsSubmitted(false);
        }
    }, [newUser, isSubmitted]);

  return (
    <div className={style.container_img_club}>  
        <div className={style.container_card_text}>
             <h1>Registro de Usuario</h1>
        </div>
        <div className={style.container_card}>
            <div className={style.container_form}>
                <form className={style.form} onSubmit={handelNewUSer}>
                    <div className={style.container_inputs}>
                        <div className={style.container_label_input}>
                            <label>Nombre:</label>
                            <input type="text" placeholder="Nombre" name='name'/>
                        </div>
                        <div className={style.container_label_input}>
                            <label>Apellido:</label>
                            <input type="text" placeholder="Apellido" name='surname'/>
                        </div>
                        <div className={style.container_label_input}>
                            <label>Segundo Apellido:</label>
                            <input type="text" placeholder="Segundo Apellido" name='secondSurname'/>
                         </div>
                    </div>             
                    <div className={style.container_inputs}>
                        <div className={style.container_label_input}>
                            <label>Fecha de Nacimiento:</label>
                            <input type="text" placeholder="Fecha de Nacimiento" name='age'/>
                        </div>
                        <div className={style.container_label_input}>
                            <label>Email:</label>
                            <input type="text" placeholder="Email" name='email'/>
                            <p>{ErrorForm.email}</p>
                        </div>
                        <div className={style.container_label_input}>
                            <label>Repetir email:</label>
                            <input type="text" placeholder="Repetir email" name='mailverification'/>
                        </div>
                    </div>
                    <div className={style.container_inputs}>
                        <div className={style.container_label_input}>
                            <label>Telefono:</label>
                            <input type="text" placeholder="Telefono" name='phone'/>
                        </div>
                        <div className={style.container_label_input}>
                            <label>Contraseña:</label>
                            <input type="password" placeholder="<PASSWORD>" name='password'/>
                        </div>
                        <div className={style.container_label_input}>
                            <label>Repetir contraseña:</label>
                            <input type="password" placeholder="<PASSWORD>" name='repeatPassword'/>
                            <p>{ErrorForm.repeatPassword}</p>
                        </div>
                    </div>
                    <div >
                     <input type="text" id="img" hidden name='img'></input>
                      <label htmlFor="img">
                        Subir Imagen
                        <img src="/assets/img/cloud-arrow-up-solid.svg" alt="Subir imagen"></img>
                       </label>   
                    </div>
                    <Loading statusLoading={statusLoading} />
                    <div className={style.container_button_register}>
                        <h1>{ErrorForm.general}</h1>
                        <button type="submit"  className={style.button_register}>Registrar</button>
                    </div>
                </form>
            </div>
           
        </div>

        <div>
    
        </div>
      
    </div>
  )
}
