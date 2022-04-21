import isDesktop from 'helpers/screen/isDesktop';
import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react';
import { AppContext } from './AppContext';

export const AppProvider = (props) => {
    const { children } = props;
    const myToast = useRef(null);
    const showAlert = (severityValue = "", summaryValue = "", detailValue = "") => {
        myToast.current.show({ severity: severityValue, summary: summaryValue, detail: detailValue });
    };
    const [widthScreen, setWidthScreen] = useState(320);
    const [heightScreen, setHeightScreen] = useState(320);
    const [pageLimit, setPageLimit] = useState(5);
    const [isSideBar, setIsSideBar] = useState(false);

    const updateDimensions = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        if (!isDesktop()) {
            setPageLimit(2);
        }
        setWidthScreen(width);
        setHeightScreen(height);
    }
    window.addEventListener("resize", updateDimensions)

    return (
        <AppContext.Provider
            value={{
                showAlert,
                widthScreen,
                heightScreen,
                pageLimit,
                setIsSideBar,
                isSideBar
            }}>
            {children}
            <Toast ref={myToast} />
        </AppContext.Provider>
    );
};
