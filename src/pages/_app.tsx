import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {  UpdateFormContext, UserContext } from "@/Context/UserContext";
import { useContext, useEffect, useState } from "react";


export default function App({ Component, pageProps }: AppProps) {

  const [userLog, setUserLog] = useState({
    id:0,
    rol:"",
    name:"",
    verificated:"",
    status:""
  });

  const [data,setUpdateForm]  = useState({});


  return (
    <UserContext.Provider value={{userLog,setUserLog}}>
      <UpdateFormContext.Provider value = {{data,setUpdateForm}} >
       <Component {...pageProps} />
       </UpdateFormContext.Provider>
  </UserContext.Provider>) ;
} 
