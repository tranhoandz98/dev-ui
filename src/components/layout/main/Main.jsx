import { ChevronRightIcon } from '@heroicons/react/outline';
import { useApp } from 'context/AppContext';
import React from 'react'
import AppFooter from '../footer/AppFooter'
import { useToggle } from '../provider/context';

const Main = ({ children }) => {
    const { isSideBar } = useApp();
    const { open, toggle } = useToggle();

    const style = {
        mainDiv: `min-h-[85.3vh] pb-10 mt-[5rem] px-2 md:pb-8 lg:px-5 w-full`,
        main: `${isSideBar ? (open ? 'ml-[15rem]' : 'ml-2') : 'ml-2'} w-full min-h-screen
        flex flex-col justify-between
        `,
    };


    return (
        <main className={style.main}>

            {isSideBar &&
                <div className={`rounded-full bg-white cursor-pointer fixed border ${open ? 'left-[14.3rem]' : 'left-0'} top-[20rem] z-50 border-slate-900/10 dark:border-slate-300/10 dark:hover:border-gray-700 dark:hover:bg-gray-500 hover:shadow-md bg-white text-slate-500 dark:text-slate-400 dark:bg-slate-900`}>
                    <ChevronRightIcon
                        className={`${open ? 'transform rotate-180' : ''
                            } w-4 h-4 text-gray-700 `}
                        onClick={() => toggle()}
                    />
                </div>
            }
            <div className={style.mainDiv}>
                {children}
            </div>
            <AppFooter />
        </main>
    )
}

export default Main
