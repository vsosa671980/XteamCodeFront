import React from 'react'
import style from "./registerUser.module.css";
export default function RegisterUserComponent() {
  return (
    <div className={style.container_img_club}>
        
        <div className={style.container_card_text}>
             <h1>Registro de Usuario</h1>
        </div>

        <div className={style.container_card}>
        
            <div className={style.container_form}>
                <form className={style.form}>
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
                            <input type="text" placeholder="Fecha de Nacimiento" name='birthrate'/>
                          
                        </div>
                        <div className={style.container_label_input}>
                            <label>Email:</label>
                            <input type="text" placeholder="Email" name='email'/>
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
                        </div>
                       
                    </div>
                    <div >
                    <input type="file" id="img" hidden></input>
                      <label htmlFor="img">
                        Subir Imagen
                        <img src="/assets/img/cloud-arrow-up-solid.svg" alt="Subir imagen"></img>
                       </label>
                        
                    </div>
                    <div className={style.container_button_register}>
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
