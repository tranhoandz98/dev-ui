import { ChevronRightIcon } from '@heroicons/react/outline';
import useStore from 'app/store';
import { useApp } from 'context/AppContext';
import React from 'react';
import { useToggle } from '../provider/context';
import SidenavItems from './items';

function SideNavigation({ mobilePosition }) {
    const { open, ref, toggle } = useToggle();
    const { isSideBar } = useApp();

    const style = {
        mobilePosition: {
            left: 'left-0 ',
            right: 'right-0 lg:left-0',
        },
        close: `w-3`,
        open: `z-40 w-60`,
        default: `SideBar text-gray-700 bg-white lg:z-40 border-r border-slate-900/10 dark:border-slate-300/10 fixed top-[4rem] bg-white dark:bg-slate-900 dark:text-gray-400`,
    };

    const projectData = useStore(state => state.projectData)

    return (
        <>
            {projectData &&
                <aside
                    ref={ref}
                    className={`${style.default} ${style.mobilePosition[mobilePosition]} ${open ? style.open : style.close} `}
                >
                    <SidenavItems />
                    {isSideBar &&
                        <div className={`rounded-full bg-white cursor-pointer fixed border ${open ? 'left-[14.3rem]' : 'left-1'} top-[20rem] z-50 border-slate-900/10 dark:border-slate-300/10 dark:hover:border-gray-700 dark:hover:bg-gray-500 hover:shadow-md bg-white text-slate-500 dark:text-slate-400 dark:bg-slate-900`}>
                            <ChevronRightIcon
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-4 h-4 text-gray-700 `}
                                onClick={() => toggle()}
                            />
                        </div>
                    }
                </aside>
            }
        </>
    );
}
export default (SideNavigation);
