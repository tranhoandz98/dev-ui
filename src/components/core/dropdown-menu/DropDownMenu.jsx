import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


const DropDownMenu = ({ option, placeholder, value, onChange, isBorder, ...props }) => {
    const style = {
        button: {
            borderWrap: `${isBorder ? 'px-3 border border-slate-900/10 dark:border-slate-300/10 py-2 hover:bg-gray-100 dark:hover:bg-gray-700' : 'px-2 hover:font-semibold'}`,
            default: `inline-flex z-50 justify-center w-full text-sm font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`,
        },
        default: `relative inline-block text-left`,
        item: {
            wrap: `z-20 absolute border border-slate-900/10 dark:border-slate-300/10 right-0 w-max mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-900 dark:text-slate-400`,
            default: `group flex relative rounded-md items-center w-full px-2 py-2 text-sm pl-8`,
            active: `bg-gray-100 dark:bg-gray-700`,
            notActive: ``,
            selected: `font-semibold`,
            notSelect: ``,
        }
    }

    return (
        <Menu as="div" className={style.default}>
            <div>
                <Menu.Button className={`${style.button.default} ${style.button.borderWrap}`}>
                    {value?.name ?? placeholder}
                    <SelectorIcon
                        fill="currentColor"
                        className="w-5 h-5 ml-2"
                        aria-hidden="true"
                    />

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
                <Menu.Items className={style.item.wrap}>
                    <div className="px-1 py-1">
                        {option.map((item, index) => {
                            return (
                                <Menu.Item key={index}>
                                    {({ active }) => (
                                        <button
                                            className={`${active ? style.item.active : style.item.notActive} ${style.item.default}
                                            ${value?.code === item?.code ? style.item.selected : style.item.notSelect} `
                                            }
                                            onClick={() => onChange(item)}
                                        >
                                            {value?.code === item?.code ? (
                                                <span
                                                    className="absolute left-0 flex items-center pl-2 text-slate-600 dark:text-slate-400"
                                                >
                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                            {item?.name}
                                        </button>
                                    )}
                                </Menu.Item>
                            )
                        })}
                    </div>
                </Menu.Items>

            </Transition>
        </Menu>

    )
}

DropDownMenu.propTypes = {
}
DropDownMenu.defaultProps = {
}

export default DropDownMenu
