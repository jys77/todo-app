import React, { createContext, useContext, useState } from "react";

export const SidebarToggleContext = createContext();

export const SidebarToggleProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <SidebarToggleContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </SidebarToggleContext.Provider>
  );
};

export const useSidebarToggle = () => useContext(SidebarToggleContext);
