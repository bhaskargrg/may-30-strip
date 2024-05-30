import React,{ useContext, useState } from "react";
import links from "./Data";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({page:'',links:[]});
  const [location, setLocation] = useState({});
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    setIsSubmenuOpen(true);

    const page = links.find((e) => e.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSidebarOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        closeSubmenu,
        openSubmenu,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
