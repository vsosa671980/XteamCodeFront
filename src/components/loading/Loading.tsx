import React from 'react'
import { ColorRing } from 'react-loader-spinner'
import style from "./loading.module.css"


interface LoadingProps {
    statusLoading: boolean;
  }
export default function loading({statusLoading}:LoadingProps) {
  return (
    <div>
         <div className={style.container_loader}>
            <ColorRing
               visible={statusLoading}
               height="80"
               width="80"
               ariaLabel="color-ring-loading"
               wrapperStyle={{}}
               wrapperClass="color-ring-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
            </div>
    </div>
  )
}
