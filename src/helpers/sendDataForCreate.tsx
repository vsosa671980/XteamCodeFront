
import React, { useState ,useRef} from 'react'
import {sendDataToServer} from "./../hooks/SendDataToServer";


// Receive the url and the data from a form submission
export const handleSendData = async (url: string, dataFromForm:any) => {

    const response = await sendDataToServer(url,dataFromForm);
    //Return the response from server
  
    return response
}