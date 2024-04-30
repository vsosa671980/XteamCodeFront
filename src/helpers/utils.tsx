

export class Utils {

    public static createLink(tableName:string):string {
        let link:string =""
        switch (tableName) {
            case "Competitions":
                link ="/competitions/CreateCompetition"
                
                break;
            case "Trainings":
                 link ="/trainings/CreateTraining"
                
                break;
            case "Users":
                 link ="/competitions/CreateCompetitions"
                break;
            case "News":
                 link ="/competitions/CreateCompetitions"
                break;
            case "Subscriptions":
                 link ="/subcriptions/CreateSubscription"

                break;
            default:
                break;
        }

        return link;
        
    }
}