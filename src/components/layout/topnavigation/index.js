import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, DotsHorizontalIcon, DotsVerticalIcon, MenuIcon, XIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { Fragment } from 'react';
import logoMain from 'assets/images/logo/logo.png';
import logoMainMobile from 'assets/images/logo/cyberlotus_icon.ico';
import { routerMain } from 'constants/routerMain';
import { Link, useLocation } from 'react-router-dom'
import React, { useContext } from 'react';
import { ThemeContext } from 'context/theme/ThemeContext';

export default function TopNavigation() {
    const { pathname } = useLocation();

    const data = [
        {
            uuid: 1,
            variable: 'warning',
            title: "CyberSign",
            message: 'Nội dung thông báo.',
            time: '1 ngày trước',
            isRead: 1,
        },
        {
            uuid: 2,
            variable: 'warning',
            title: "CyberSign",
            message: 'Nội dung thông báo.',
            time: '1 ngày trước',
            isRead: 1,
        },
        {
            uuid: 3,
            variable: 'warning',
            title: "CyberSign",
            message: 'Nội dung thông báo.',
            time: '1 ngày trước',
            isRead: 2,
        },
        {
            uuid: 4,
            variable: 'warning',
            title: "CyberSign",
            message: 'Nội dung thông báo.',
            time: '1 ngày trước',
            isRead: 2,
        },
        {
            uuid: 5,
            variable: 'warning',
            title: "CyberSign",
            message: 'Nội dung thông báo.',
            time: '1 ngày trước',
            isRead: 2,
        },
        {
            uuid: 6,
            variable: 'warning',
            title: "CyberSign",
            message: 'Nội dung thông báo.',
            time: '1 ngày trước',
            isRead: 2,
        },
        {
            uuid: 7,
            variable: 'warning',
            title: "CyberSign",
            message: 'Nội dung thông báo.',
            time: '1 ngày trước',
            isRead: 2,
        },
        {
            uuid: 8,
            variable: 'warning',
            title: "CyberSign",
            message: 'Nội dung thông báo.',
            time: '1 ngày trước',
            isRead: 2,
        },
        {
            uuid: 9,
            variable: 'warning',
            title: "CyberSign",
            message: 'Nội dung thông báo.',
            time: '1 ngày trước',
            isRead: 2,
        },
    ]

    const onMouseEnterRowNotify = (event, data, index) => {
        let buttonView = document.querySelector(`.menu-notify__item--more${data.uuid}`);
        buttonView.classList.remove('hidden');
    }
    const onMouseLeaveRowNotify = (event, data, index) => {
        let buttonView = document.querySelector(`.menu-notify__item--more${data.uuid}`);
        buttonView.classList.add('hidden');
    }

    const navigation = [
        { name: 'Hỗ trợ', link: routerMain.SUPPORT },
        { name: 'Hỗ trợ 2', link: routerMain.PROJECT },
    ]
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <>
            <Disclosure as="nav" className="w-screen border-gray-200 shadow-sm z-50 border-b border-slate-900/10 dark:border-slate-300/10 fixed h-[4rem] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200">
                {({ open }) => (
                    <>
                        <div className=" mx-auto px-2 lg:px-5 ">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <Link to={routerMain.HOME}>
                                            <img
                                                className="block lg:hidden h-8 w-auto"
                                                src={logoMainMobile}
                                                alt="Workflow"
                                            />
                                        </Link>
                                        <Link to={routerMain.HOME}>
                                            <img
                                                className="hidden lg:block h-8 w-auto"
                                                alt="Workflow"
                                                src={logoMain}
                                            />
                                        </Link>

                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4  md:text-sm md:font-medium">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.link}
                                                    className={classNames(
                                                        pathname === item.link ? 'text-sky-500' : ' hover:text-sky-500 dark:hover:text-sky-400',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={pathname === item.link ? 'page' : undefined}

                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                                    <Menu as="div" className="relative hover:text-sky-500 dark:hover:text-sky-400">
                                        {theme === 'dark' ? (
                                            <button className="inline-flex items-center  justify-center p-2 rounded-full  "
                                                onClick={(e) => changeTheme()}
                                            >
                                                <span className="sr-only">Light theme</span>
                                                <SunIcon className="h-6 w-6 " aria-hidden="true" />
                                            </button>
                                        )
                                            : (
                                                <button className="inline-flex items-center justify-center p-2 rounded-full "
                                                    onClick={(e) => changeTheme()}
                                                >
                                                    <span className="sr-only">Dark theme</span>
                                                    <MoonIcon className="h-6 w-6 " aria-hidden="true" />
                                                </button>
                                            )
                                        }
                                    </Menu>
                                    <Menu as="div" className="relative hover:text-sky-500 dark:hover:text-sky-400">
                                        <div>
                                            <Menu.Button className="inline-flex  items-center justify-center p-2 rounded-full ">
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6 " aria-hidden="true" />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >

                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-900 text-slate-700 dark:text-slate-200">
                                                <div className="flex">
                                                    <div className="text-lg p-2 font-medium">Thông báo</div>
                                                    <div className="ml-auto">
                                                        <Menu as="div" className="ml-3 relative z-[70]">
                                                            <div>
                                                                <Menu.Button className="inline-flex items-center justify-center p-2 rounded-full focus:outline-none  dark:bg-slate-900 text-slate-700 hover:bg-gray-700  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                                    <span className="sr-only">Read notifications</span>
                                                                    <DotsVerticalIcon className="h-6 w-6" />
                                                                </Menu.Button>
                                                            </div>
                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-100"
                                                                enterFrom="transform opacity-0 scale-95"
                                                                enterTo="transform opacity-100 scale-100"
                                                                leave="transition ease-in duration-75"
                                                                leaveFrom="transform opacity-100 scale-100"
                                                                leaveTo="transform opacity-0 scale-95"
                                                            >
                                                                <Menu.Items className="origin-top-right absolute right-0 w-44 rounded-md shadow-lg py-1 bg-white  dark:bg-slate-900 dark:text-slate-400 ">
                                                                    <Menu.Item >
                                                                        {({ active }) => (
                                                                            <span
                                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm dark:hover:bg-gray-700')}
                                                                            >
                                                                                Đọc tất cả
                                                                            </span>
                                                                        )}
                                                                    </Menu.Item>
                                                                    <Menu.Item >
                                                                        {({ active }) => (
                                                                            <span
                                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm dark:hover:bg-gray-700')}
                                                                            >
                                                                                Làm mới
                                                                            </span>
                                                                        )}
                                                                    </Menu.Item>
                                                                    <Menu.Item >
                                                                        {({ active }) => (
                                                                            <span
                                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm dark:hover:bg-gray-700')}
                                                                            >
                                                                                Xóa tất cả
                                                                            </span>
                                                                        )}
                                                                    </Menu.Item>
                                                                </Menu.Items>
                                                            </Transition>
                                                        </Menu>
                                                    </div>
                                                </div>
                                                <div className="overflow-auto max-h-[80vh]">
                                                    {data.map((itemN, index) => {
                                                        return (
                                                            <Menu.Item key={index}>
                                                                {({ active }) => (
                                                                    <>
                                                                        <div className={`border-t relative solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-200 dark:hover:bg-gray-700 ${itemN.isRead === 1 ? '' : 'opacity-70'}`}
                                                                            onMouseEnter={(event) => onMouseEnterRowNotify(event, itemN)}
                                                                            onMouseLeave={(event) => onMouseLeaveRowNotify(event, itemN)}
                                                                        >
                                                                            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                                                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                                                            </div>
                                                                            <div className="pl-4 w-full">
                                                                                <div className="flex items-center justify-between w-full">
                                                                                    <div className=" font-medium">{itemN.title}</div>
                                                                                </div>
                                                                                <p className="my-2 text-sm text-gray-500">
                                                                                    {itemN.message}
                                                                                </p>
                                                                                <p className={classNames(itemN.isRead === 1 ? 'text-blue-600' : '', 'text-right text-gray-500 text-sm')}>{itemN.time}</p>
                                                                            </div>
                                                                            {itemN.isRead === 1 &&
                                                                                <span className="absolute right-6 top-10 h-2 w-2 bg-sky-500 rounded-full">
                                                                                </span>
                                                                            }
                                                                            <Menu as="div" className={`ml-3 hidden  relative top-3 menu-notify__item--more${itemN.uuid}`}>
                                                                                <div>
                                                                                    <Menu.Button className="absolute right-1 inline-flex items-center justify-center p-2 rounded-full focus:outline-none text-gray-200 bg-gray-600 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                                                        <span className="sr-only">Read notifications</span>
                                                                                        <DotsHorizontalIcon className="h-6 w-6" />
                                                                                    </Menu.Button>
                                                                                </div>
                                                                                <Transition
                                                                                    as={Fragment}
                                                                                    enter="transition ease-out duration-100"
                                                                                    enterFrom="transform opacity-0 scale-95"
                                                                                    enterTo="transform opacity-100 scale-100"
                                                                                    leave="transition ease-in duration-75"
                                                                                    leaveFrom="transform opacity-100 scale-100"
                                                                                    leaveTo="transform opacity-0 scale-95"
                                                                                >
                                                                                    <Menu.Items className="mt-10 z-[11] origin-top-right absolute right-0 w-44 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-900 dark:text-slate-400 ">
                                                                                        <Menu.Item >
                                                                                            {({ active }) => (
                                                                                                <span
                                                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm dark:hover:bg-gray-700')}
                                                                                                >
                                                                                                    Đánh dấu đã đọc
                                                                                                </span>
                                                                                            )}
                                                                                        </Menu.Item>
                                                                                        <Menu.Item >
                                                                                            {({ active }) => (
                                                                                                <span
                                                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm dark:hover:bg-gray-700')}
                                                                                                >
                                                                                                    Xóa
                                                                                                </span>
                                                                                            )}
                                                                                        </Menu.Item>
                                                                                    </Menu.Items>
                                                                                </Transition>
                                                                            </Menu>
                                                                        </div>

                                                                    </>
                                                                )}
                                                            </Menu.Item>
                                                        )
                                                    })}
                                                </div>

                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative ">
                                        <div>
                                            <Menu.Button className="ring-2 p-[0.05rem] ring-sky-300 dark:ring-sky-500 flex rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-600 focus:ring-white ">
                                                <span className="sr-only">Open user menu</span>
                                                <div className="h-8 w-8 rounded-full text-xl bg-blue-500 text-white">
                                                    {
                                                        'string'.charAt(0)
                                                    }
                                                </div>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-900 dark:text-slate-400 ">

                                                <div className="py-3 px-4">
                                                    <span className="block text-sm ">Bonnie Green</span>
                                                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                                                </div>
                                                <hr />
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm dark:hover:bg-gray-700')}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm dark:hover:bg-gray-700')}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm dark:hover:bg-gray-700')}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden ">
                            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 border-b border-slate-900/10 dark:border-slate-300/10">
                                {navigation.map((item, index) => (
                                <Link
                                    to={item.link}
                                    key={index}
                                >
                                    <Disclosure.Button
                                        as="span"
                                        className={classNames(
                                            pathname === item.link ? 'bg-sky-500 text-white' : 'hover:text-sky-500 dark:hover:text-sky-400',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                </Link>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}
