interface Week {
    [key: string]: string;
}

function calculateWeek(today: Date, next: boolean = false): Week {

    //Check if next is true or false
    if (!next) {
    // Set the current date adding up 7 days
        today.setDate(today.getDate() + 7);
    }
    // Get the number of day
    let dayOfweek = today.getDay();
    //Get the number of day
    let firstDayOfWeek = new Date(today);
    //Set first day of week Monday
     firstDayOfWeek.setDate(today.getDate() - dayOfweek + 1);
    // Set the number of days
    let totalDays = 7;
    //Create object of week
    let week: Week = {}; // Aquí estableces el tipo de week como Week
    let dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    for (let i = 0; i < totalDays; i++) {
        let day = new Date(firstDayOfWeek);
        day.setDate(firstDayOfWeek.getDate() + i);
        let NameOfDay: string = dayNames[day.getDay()];
        let dayOfWeek: string = day.toISOString().split("T")[0];
        week[NameOfDay] = dayOfWeek; 
    }

    return week;
}
