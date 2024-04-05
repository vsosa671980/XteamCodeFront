import React,{useRef}from 'react'
import style from "./GeneralMenu.module.css"
import Link from 'next/link';
import LoginComponent from '../Login/LoginComponent';


export default function GeneralMenuComponent() {

    const modalRef = useRef<HTMLDialogElement | null>(null);

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
                    <li><img src="../../assets/img/xteam.webp" alt="" />Soy una imagen</li>
                </div>
                <div className={style.nav_container_news}>
                    <li>Noticias</li>
                    
                    <li>
                        <Link href="#" onClick={openModal}>
                           Login
                        </Link>
                      
                    </li>
                </div>          
            </ul>
        </nav>
        <div className={style.auxiliar_container_space}>

            
        </div>

        <LoginComponent modalRef={modalRef} />
    </div>
  )
}
