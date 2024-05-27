import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "@/Context/UserContext";
import { useContext, useEffect, useState } from "react";


export default function App({ Component, pageProps }: AppProps) {

  const [userLog, setUserLog] = useState({
    rol:"",
    name:"",
    verificated:"",
    status:""
  });
  return (
    <UserContext.Provider value={{userLog,setUserLog}}>
       <Component {...pageProps} />
  </UserContext.Provider>) ;

} 
