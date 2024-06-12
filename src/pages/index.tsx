
import LayoutImg from "@/components/LayoutImg/LayoutImg";
import {UserContext} from  "../Context/UserContext";
import { Authentication } from '@/helpers/Authentification';
import { useContext, useEffect, useState } from "react";
import Calendar from "@/components/calendar/Calendar";
import VerificationUser from "@/components/VerificacionUser/VerificationUser";



export default  function Home() {

  type context = {}

  const [userLog, setUserLog] = useState({
    rol:"",
    name:"",
    verificated:"",
    status:""
  });
  //Get the user logged
  return (
 
       <LayoutImg />
     

   
  );
}
