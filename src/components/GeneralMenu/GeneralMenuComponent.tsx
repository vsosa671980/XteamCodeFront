import React,{useRef, useState}from 'react'
import style from "./GeneralMenu.module.css"
import Link from 'next/link';
import LoginComponent from '../Login/LoginComponent';


export default function GeneralMenuComponent() {

    const modalRef = useRef<HTMLDialogElement | null>(null);

    const  [userRegistration,setUserRegistration] = useState(false);
    const  [userRoles,setUserRoles] = useState("admin");

    function HabdleUSerRegistragtion(){
      setUserRegistration(true);
    }

    function HandleUSerRole(){
      setUserRoles("admin");
    }
    

    // Open the modal window
    const openModal = () => {
      if (modalRef.current) {
        modalRef.current.showModal();
      }
    }
  return (
    <div >
        <nav>
            <ul className={style.general_nav_container}>
                <div className={style.nav_container_img}>
                    <li><img src="/assets/img/xteam.webp" alt="" className={style.imgLogo} /></li>
                    {userRoles === "admin" && (
                         <div className={style.nav_container_menu}> 
                          <li><Link href="/admin/Users" className={style.link_menus}>Usuarios</Link></li>
                            <li><Link href="#" className={style.link_menus}>Entrenamientos</Link></li>
                            <li><Link href="#" className={style.link_menus}>Noticias</Link></li>
                            <li><Link href="#" className={style.link_menus}>Competiciones</Link></li>
                            <li><Link href="#" className={style.link_menus}>Pagos</Link></li>
                          </div>
                    )}
                   
                </div>
               
                <div className={style.nav_container_news}>
                   {!userRegistration ? <li>Noticias</li> : null} 
                    
                    <li>
                        <Link href="#" onClick={openModal}>
                           Login
                        </Link>
                    </li>
                    {userRegistration ? <li>Profile</li> : null}
                </div>          
            </ul>
        </nav>
        <div className={style.auxiliar_container_space}>

            
        </div>

        <LoginComponent modalRef={modalRef} />
    </div>
  )
}
