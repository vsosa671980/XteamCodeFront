import { receivedData } from "./recievedataFecth";
import { handleSendData } from "./sendDataForCreate";



export const handelSubmitForm =async (url:string,object:object)=>
    {
     const response = await handleSendData(url,object)
     //Call the received Function passing url and Object
     receivedData(response)
}
