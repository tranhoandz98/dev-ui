import React from 'react';
import { useToggle } from '../provider/context';
import SidenavItems from './items';
import css from './style.module.css';


export default function SideNavigation({ mobilePosition }) {
  const { open, ref } = useToggle();

  const style = {
    mobilePosition: {
      left: 'left-0 ',
      right: 'right-0 lg:left-0',
    },
    close: `duration-900 ease-out transition dark:transition-none w-3`,
    open: `duration-700 ease-in transition dark:transition-none z-40 w-60`,
    default: `SideBar text-gray-700 bg-white lg:z-40 border-r border-slate-900/10 dark:border-slate-300/10 fixed top-[4rem] bg-white text-slate-500 dark:text-slate-400 dark:bg-slate-900`,
  };
  return (
    <>
      <aside
        ref={ref}
        className={`${style.default} ${style.mobilePosition[mobilePosition]}
        ${open ? style.open : style.close} ${css.scrollbar} `}
      >
          <SidenavItems />
      </aside>

    </>
  );
}
