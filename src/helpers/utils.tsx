

export class Utils {

    public static createLink(tableName:string):string {
        let link:string =""
        switch (tableName) {
            case "users":
              link = "/user/create"
              break;
            case "Competitions":
                link ="/competitions/create"          
                break;
            case "trainings":
                 link ="/trainings/create"
                
                break;
            case "Users":
                 link ="/competitions/create"
                break;
            case "News":
                 link ="/competitions/create"
                break;
            case "Subscriptions":
                 link ="/subcriptions/create"

                break;
            default:
                break;
        }
        return link;
        
    }
}