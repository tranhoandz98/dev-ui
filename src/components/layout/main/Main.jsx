import { useApp } from 'context/AppContext';
import React from 'react';
import AppFooter from '../footer/AppFooter';
import { useToggle } from '../provider/context';

const Main = ({ children }) => {
    const { isSideBar } = useApp();
    const { open } = useToggle();

    const style = {
        mainDiv: `min-h-[85.3vh] pb-10 mt-[4rem] md:pb-8  w-full`,
        main: `${isSideBar ? (open ? 'ml-[15rem]' : 'ml-2') : 'ml-0'} min-h-screen flex flex-col justify-between
        `,
    };


    return (
        <main className={style.main}>
            <div className={style.mainDiv}>
                {children}
            </div>
            <AppFooter />
        </main>
    )
}

export default Main
