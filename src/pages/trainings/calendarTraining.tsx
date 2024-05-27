import { useState , useEffect} from 'react';
import Calendar from '@/components/calendar/Calendar'
import { sendDataToServer } from '@/hooks/SendDataToServer';

export default function calendarTraining() {

    const [trainings,setTrainings] = useState()

    const handleTraining = (trainings:any) => {
        setTrainings(trainings)
    }

    useEffect(() => {

    })
        
  return (
    
    <div>
       <Calendar />
    </div>
  )
}
