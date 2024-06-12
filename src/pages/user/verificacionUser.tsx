import VerificationUser from '@/components/VerificacionUser/VerificationUser';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { sendDataToServer } from '@/hooks/SendDataToServer';

interface Token {
  token: string;
}

export default function VerificacionUser() {
  const router = useRouter();
  const [token,setToken] = useState<Token | null>(null);
  const [statusSpinner, setStatusSpinner] = useState(true);
  const [statusMessage, setStatusMessage] = useState(false);
  const [statusMessageError, setStatusMessageError] = useState(false);
  const [statusMessageVerificating, setStatusMessageVerificating] = useState(true);

  const tokenReceived = router.query.token;
  const verification = async () => {
    const url = "http://localhost:8000/users/verification";
    console.log("llega el token ");
    try {
      if (token) {
        console.log("Voya  llamar al token")
        const response = await sendDataToServer(url, token);

        setTimeout (() => {
          if(response.status === "success"){
            console.log("Esta Bien ")
            setStatusMessage(true);
            setStatusMessageError(false);
            setStatusSpinner(false);
            setStatusMessageVerificating(false);
          }
          setTimeout (() => {
            router.push("/")
          })

          if(response.status === "error"){
            console.log("Esta mal ")
            setStatusMessage(false);
            setStatusMessageError(true);
            setStatusSpinner(false);
            setStatusMessageError(false);
          }

        },3000)

   
      }
    } catch (error) {
      console.error("Error al verificar el usuario:", error);
      // Manejar el error, establecer el estado adecuado, mostrar un mensaje de error, etc.
    }
  };

  const handleToken = () => {
    if (typeof tokenReceived === 'string') {
      const tokenObject = {
        token: tokenReceived,
      };
      setToken(tokenObject);
    }
  };

  useEffect(() => {
    handleToken();
  }, [tokenReceived]);
  
  useEffect(() => {
    verification();
  }, [token]);
  return (
    <div>
        <div>
           {statusMessageVerificating && <h1>Verificando ....</h1>}
        </div>
      <VerificationUser statusSpinner={statusSpinner} />
      {statusMessage && <h1>Verificado !!</h1>}
      {statusMessageError && <h1>Error al Verificar el Usuario</h1>}
    </div>
  );
}

