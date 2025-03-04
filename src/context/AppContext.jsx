import { createContext, useContext, useState } from 'react';

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pageId, setPageId] = useState(null);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <AppContext.Provider
            value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export default useGlobalContext;
