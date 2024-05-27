import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserLog {
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
    rol: 'valor',
    name: 'valor',
    verificated: 'valor',
    status: 'valor'
  },
  setUserLog: () => {
    // función para actualizar el registro del usuario
  }
};
export const UserContext = createContext<UserContextType>(user);





