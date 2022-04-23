import { XIcon } from '@heroicons/react/outline';
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationIcon, XCircleIcon } from '@heroicons/react/solid';
import isDesktop from 'helpers/screen/isDesktop';
import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { AppContext } from './AppContext';

export const AppProvider = (props) => {
    const { children } = props;
    const showAlert = (severityValue = "", summaryValue = "", detailValue = "") => {
        switch (severityValue) {
            case "error":
                const toastIdE = toast.custom(
                    <div id="toast-danger" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                            <XCircleIcon className="w-5 h-5" fill="currentColor" />
                        </div>
                        <div>
                            <div className="ml-3 text-sm font-medium">{summaryValue}</div>
                            <div className="ml-3 text-sm font-normal">{detailValue}</div>
                        </div>
                        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close"
                            onClick={() => toast.remove(toastIdE)}
                        >
                            <span className="sr-only">Close</span>
                            <XIcon className="w-5 h-5" fill="currentColor" />
                        </button>
                    </div>
                );
                break;
            case "success":
                const toastIdS = toast.custom(
                    <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                            <CheckCircleIcon className="w-5 h-5" fill="currentColor" />
                        </div>
                        <div>
                            <div className="ml-3 text-sm font-medium">{summaryValue}</div>
                            <div className="ml-3 text-sm font-normal">{detailValue}</div>
                        </div>
                        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close"
                            onClick={() => toast.remove(toastIdS)}
                        >
                            <span className="sr-only">Close</span>
                            <XIcon className="w-5 h-5" fill="currentColor" />
                        </button>
                    </div>
                );
                break;
            case "info":
                const toastIdI = toast.custom(
                    <div id="toast-info" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                            <ExclamationCircleIcon className="w-5 h-5" fill="currentColor" />
                        </div>
                        <div>
                            <div className="ml-3 text-sm font-medium">{summaryValue}</div>
                            <div className="ml-3 text-sm font-normal">{detailValue}</div>
                        </div>
                        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close"
                            onClick={() => toast.remove(toastIdI)}
                        >
                            <span className="sr-only">Close</span>
                            <XIcon className="w-5 h-5" fill="currentColor" />
                        </button>
                    </div>
                );
                break;
            case "warn":
                const toastIdW = toast.custom(
                    <div id="toast-warning" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                            <ExclamationIcon className="w-5 h-5" fill="currentColor" />
                        </div>
                        <div>
                            <div className="ml-3 text-sm font-medium">{summaryValue}</div>
                            <div className="ml-3 text-sm font-normal">{detailValue}</div>
                        </div>
                        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close"
                            onClick={() => toast.remove(toastIdW)}
                        >
                            <span className="sr-only">Close</span>
                            <XIcon className="w-5 h-5" fill="currentColor" />
                        </button>
                    </div>
                );
                break;
            default:
                const toastIdD = toast.custom(
                    <div id="toast-warning" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-500 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-200">
                            <ExclamationCircleIcon className="w-5 h-5" fill="currentColor" />
                        </div>
                        <div>
                            <div className="ml-3 text-sm font-medium">{summaryValue}</div>
                            <div className="ml-3 text-sm font-normal">{detailValue}</div>
                        </div>
                        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close"
                            onClick={() => toast.remove(toastIdD)}
                        >
                            <span className="sr-only">Close</span>
                            <XIcon className="w-5 h-5" fill="currentColor" />
                        </button>
                    </div>
                );
                break;
        }


        // myToast.current.show({ severity: severityValue, summary: summaryValue, detail: detailValue });
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
            {/* <ToastContainer /> */}
            <Toaster
                position="top-right"
                gutter={5}
                containerStyle={{
                    top: '5rem',

                }}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        minWidth: '9rem'
                    }
                }}
            />
            {children}
        </AppContext.Provider>
    );
};
