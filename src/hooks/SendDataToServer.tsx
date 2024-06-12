import React from 'react';
import { useState } from 'react';

export const sendDataToServer = (url: string, object: any) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object)
    };
    // Devolver la promesa para permitir el manejo adecuado de la respuesta
    return fetch(url, requestOptions)
        .then(response => response.json())
        .then(json => {
            console.log("soy el Json",json);
            return json; // Devolver los datos recibidos del servidor
        })
        .catch(error => {
            console.error('Se produjo un error:', error);
            throw error; // Relanzar el error para que pueda ser manejado externamente
        });
};
export const sendDataToserverWithToken = (url:string,object:any,token:string) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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