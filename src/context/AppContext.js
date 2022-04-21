import React, { useContext } from 'react';

export const AppContext = React.createContext({
    // showAlert: () => {},
});

export const useApp = () => useContext(AppContext);
export default AppContext;
