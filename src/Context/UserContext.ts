import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserLog {
  id: number,
  rol: string;
  name: string;
  verificated: string;
  status: string;
}

interface UserContextType {
  userLog: UserLog;
  setUserLog: React.Dispatch<React.SetStateAction<UserLog>>;
}

const user: UserContextType = {
  userLog: {
    id:0,
    rol: 'valor',
    name: 'valor',
    verificated: 'valor',
    status: 'valor'
  },
  setUserLog: () => {
    // función para actualizar el registro del usuario
  }
};


interface UpdateForm {
  data: {};
  setUpdateForm: React.Dispatch<React.SetStateAction<[]>>;
}
const updateForm: UpdateForm = {
  data: {},
  setUpdateForm: () => {
    // función para actualizar el registro del usuario
  }
};


export const UpdateFormContext = createContext<UpdateForm>(updateForm)
export const UserContext = createContext<UserContextType>(user);






