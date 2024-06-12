import React from 'react'
import { Oval } from 'react-loader-spinner'
import { useRouter } from 'next/router'


interface Props{
    statusSpinner:boolean;
}

export default function VerificationUser({statusSpinner}:Props) {

    const router = useRouter();
    const token = router.query.token;

  return (
    <div>
      
        <div>
        <Oval
        visible={statusSpinner}
        height="80"
        width="120"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        secondaryColor='blue'
       />
            
        </div>
      
    </div>
  )
}
function useState(arg0: string): [any, any] {
    throw new Error('Function not implemented.')
}

