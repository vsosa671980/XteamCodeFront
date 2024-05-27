import React,{useRef, useState, useEffect, useContext}from 'react'
import style from "./GeneralMenu.module.css"
import Link from 'next/link';
import LoginComponent from '../Login/LoginComponent';
import { Authentication } from '@/helpers/Authentification';
import { LocalStorage } from '@/helpers/LocalStorage';
import { useRouter } from 'next/router';
import {UserContext} from "../../Context/UserContext"


export default function GeneralMenuComponent() {
    
    const router = useRouter();
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const  [userRegistration,setUserRegistration] = useState(false);
    const  [userRoles,setUserRoles] = useState("");
    const  [userLoginName,setUserLoginName] = useState("");
    const [userStatus,SetUserStatus] = useState("inactive");

    const usuarioContexto = useContext(UserContext)
  

    // Check the rol of user and set it
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const received = await LocalStorage.getLocalStorage();
          console.log(received);
          
          const user = await Authentication.getUser();
          if (user) {
            setUserRoles(user.rol);
            setUserRegistration(true);
            setUserLoginName(user.name);

          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchUserData();
    }, []);
    
    const logout = () => {
      LocalStorage.deleteLocalStorage()
      router.push("/")
      router.reload();
      
    }
    // Open the modal window
    const openModal = () => {
      if (modalRef.current) {
        modalRef.current.showModal();
      }
    }

    const returnToMainPage  = () => {
      router.push("/")
    }

  return (
    <div >
        <nav>
            <ul className={style.general_nav_container}>
                <div className={style.nav_container_img}>
                    <li><img src="/assets/img/xteam.webp" alt="" className={style.imgLogo} onClick={returnToMainPage} /></li>
                    {userRoles === "admin" && (
                         <div className={style.nav_container_menu}> 
                          <li><Link href="/admin/Users" className={style.link_menus}>Usuarios</Link></li>
                            <li><Link href="/trainings/ListTraings" className={style.link_menus}>Entrenamientos</Link></li>
                            <li><Link href="#" className={style.link_menus}>Noticias</Link></li>
                            <li><Link href="/competitions/ListCompetitions" className={style.link_menus}>Competiciones</Link></li>
                            <li><Link href="/subcriptions/listsubcriptions" className={style.link_menus}>Subscripciones</Link></li>
                          </div>
                    )}
                    {userRoles === "user" && userStatus === "active" &&(
                      <div className={style.nav_container_menu}>
                         <li><Link href="/trainings/calendarTraining" className={style.link_menus}>Entrenamientos</Link></li>
                         <li><Link href="#" className={style.link_menus}>Noticias</Link></li>
                         <li><Link href="/competitions/ListCompetitions" className={style.link_menus}>Competiciones</Link></li>
                      </div>
                    )}
                   
                </div>
                <div className={style.nav_container_news}>
                   {!userRegistration ?
                   <>
                      <Link href="#" onClick={openModal}>
                      <span className={style.login}>Acceso Triathleta</span>
                      </Link>
                   </> : null} 
                    {userRegistration ?
                    <>
                      <li>{userLoginName}</li> 
                      <li onClick ={logout}>Logout</li>
                      </>
                      : null}
                     
                   
                </div>          
            </ul>
        </nav>
        <div className={style.auxiliar_container_space}>

            
        </div>

        <LoginComponent modalRef={modalRef} />
    </div>
  )
}
