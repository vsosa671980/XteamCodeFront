
export class LocalStorage{

    //Save the local storage
    public static setLocalStorage(token:string){
        localStorage.setItem("authToken",token)
    }
  //Get the local storage
    public static async getLocalStorage(){
        return localStorage.getItem("authToken")
    }
    //Delete the local storage
    public static deleteLocalStorage(){
        localStorage.removeItem("authToken")
 }

}