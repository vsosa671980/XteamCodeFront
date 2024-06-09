import { LocalStorage } from "@/helpers/LocalStorage";


class FetchServer{










     static sendDataToServerWithToken = async (url:string,object:any) => {
        // Get the token from LocalStorage
        const token = await  LocalStorage.getLocalStorage();

        if(token){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                           'Authorization': `Bearer ${token}` 
                 },
                body: JSON.stringify(object)
            };
            // Devolver la promesa para permitir el manejo adecuado de la respuesta
            return fetch(url, requestOptions)
                .then(response => response.json())
                .then(json => {
                    return json; // Devolver los datos recibidos del servidor
                })
                .catch(error => {
                    console.error('Se produjo un error:', error);
                    throw error; // Relanzar el error para que pueda ser manejado externamente
                });
        }
       
        //Response if Token is null or


    console.log("No estas Logeado")


    }







}