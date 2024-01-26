import React, { createContext } from "react";

 export const ContextX = createContext();

const ContxtProvider = ({children}) => {
  const data = "This is me Shahbaz Khan I love making websites";

  return (
    <ContextX.Provider value={data}>
      {children}
    </ContextX.Provider>
  )
};

export default ContxtProvider;
