

export const receivedData = (url: string) => {
    return fetch(url)
        .then(response => 
           response.json()
        )
        .then((data) => {
            console.log(data.subscriptions)
            return data.subscriptions; // Devolver los datos obtenidos
        })
        .catch((error) => {
            console.error('Error:', error);
            throw error; // Relanzar el error para que pueda ser manejado externamente
        });
}