import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    if (document.body.className !== "body modal-open") {
        document.body.classList.add('modal-open')
    } else {
        document.body.classList.remove('modal-open');
    }
    
  };
  return (
    <Context.Provider
      value={{
        sidebar,
        setSidebar,
        showSidebar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
