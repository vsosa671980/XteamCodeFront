import {jwtDecode} from 'jwt-decode'
import { LocalStorage } from './LocalStorage'
import { TokenPayload } from '@/interfaces/payloadToken';

export class Authentication{
    public static async getUser(){
        const token =await  LocalStorage.getLocalStorage();
        try{
            if(token){
                const decoded: TokenPayload = jwtDecode(token);
                const user = {
                    id:decoded.id,
                  
                    rol:decoded.rol,
                    name:decoded.name,
                    verificated:decoded.verificated,
                    status:decoded.status
                }
                return user;
            }else{
                console.log("No hay token");
                return null;
            }   
        }catch(error:any){
            throw new Error(error.message);

        }
      
    }
    public static logout(){
        LocalStorage.deleteLocalStorage();
    }
}