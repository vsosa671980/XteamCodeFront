// LoginComponent.jsx
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import style from "./Login.module.css";
import Link from 'next/link';
import { sendDataToServer } from '@/hooks/SendDataToServer';
import { LocalStorage } from '@/helpers/LocalStorage';
import { Authentication } from '@/helpers/Authentification';
import { ColorRing } from 'react-loader-spinner';
import { UserContext } from '@/Context/UserContext';


interface LoginComponentProps {
  modalRef: React.RefObject<HTMLDialogElement>;
}

export default function LoginComponent({ modalRef }: LoginComponentProps) {
  const router = useRouter();
  const [userRegistered,setUserRegistered] = useState("");
  const [rolUser,setRolUser] = useState("");
  const [visible, setVisible] = useState(false);
  const userLogged = useContext(UserContext)
  const setUserLog = userLogged?.setUserLog

  const HandleRegistered= (message:string) => {
    setUserRegistered(message)
  }

  const handleRolUser = (rol:string) => {
    
  }

  const sendData =async  (event:any)=> {
      // Remove the normal shape of the form
      event.preventDefault()
      //Create a new formFataObject
     const formData = new FormData(event.target)
      //Create a empty object
     const object: { [key: string]: any } = {}; 
      //Obtein the key(name, value) of each input for creating the object
     formData.forEach((value, key) => {
         object[key] = value
     })
     // Send data to server
     const response =await  sendDataToServer("http://localhost:8000/user/login",object)
     console.log(response.status)
     if(response.status === "errorVerification"){
       HandleRegistered("Necesitas Verificar Correo")
       console.log("No esta verificado")
     } 
     if (response.status == "success") {
      //Create the token
      const token = response.token
      // Set the token in LocalStorage
      LocalStorage.setLocalStorage(token)
      setVisible(true)
      const user =await Authentication.getUser();
      if(user){
        setUserLog(user)
      }
      const timeout = setTimeout(() => {
        setVisible(false); // Ocultar el loader después de 5 segundos0
        closeModal();
        if(user?.status === "inactive" ){
          router.push("/prices/Prices")
        }else if(user?.status === "active")
          {
          router.reload();
        }
      }, 3000)
     
     }else{

         HandleRegistered("Usuario no registrado !!!")
     }
  }
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  }

  return (
    <div>
      <dialog className={style.modal} ref={modalRef}>
        <div className={style.container_login}>
          <form className={style.form_login} onSubmit={sendData}>
            <div className={style.form_login_text}>
                <h1>Bienvenido</h1>
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
           
            <div className={style.container_form_input}>
                <input className={style.input}type="text" placeholder="email" name='email'/>
            </div>
            <div className={style.container_form_input}>
                <input className={style.input} type="password" placeholder="Contraseña" name='password'/>
            </div>
            <div className={style.container_span}>
              <span><h2 className={style.container_span_span}>{userRegistered}</h2></span>
            </div>
            <div className={style.container_button_login}>
                <button className={style.button_login}type="submit">Login</button>

            </div>
            <div className={style.container_remember_login}>
              <p>Recordar contraseña</p>
              <Link href="/user/Register" className={style.button_register}><span className={style.span}>Registrarse</span></Link>
            </div>
           
          
            
          </form>
         
        </div>
      </dialog>
    </div>
  );
}
