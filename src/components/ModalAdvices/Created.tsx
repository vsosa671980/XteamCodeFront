import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import style from "./create.module.css"

interface Props {
  closeModal: () => void;
  message:string;
}

export default function Created({ closeModal,message }: Props) {
  //const modalRef = useRef<HTMLDialogElement | null>(null);
  //const router = useRouter();

  return (
    <div>
          <div className={style.container_modal}>
            <h1>{message}</h1>
            <button className="close" onClick={closeModal}>
              Close
            </button>
          </div>

    </div>
  );
}