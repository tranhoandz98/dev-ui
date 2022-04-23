import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import { Listbox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const DropDown = ({ option, placeholder, value, onChange, isBorder, ...props }) => {
    const style = {
        button: {
            // borderWrap: `${isBorder ? 'px-3 border border-slate-900/10 dark:border-slate-300/10 py-2 hover:bg-gray-100 dark:hover:bg-gray-700' : 'px-2 hover:font-semibold'}`,
            borderWrap: `${isBorder ? 'py-2 pl-3 border border-slate-900/10 dark:border-slate-300/10 bg-white dark:bg-slate-900' : ''}`,
            default: `relative w-full pr-10 text-left
            rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm
            `,
        },
        default: `relative inline-block text-left`,
        item: {
            wrap: `z-20 absolute  py-1 mt-1 overflow-auto text-base right-0 w-max bg-white dark:bg-slate-900 border border-slate-900/10 dark:border-slate-300/10 rounded-md max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`,
            default: `cursor-default select-none relative py-2 pl-10 pr-4`,
            active: `text-slate-900 bg-slate-100 dark:hover:bg-gray-700`,
            notActive: `text-gray-900 dark:text-slate-400`,
        }
    }

    return (
        <div className="w-28">

            <Listbox value={value} onChange={onChange}>
                <div className="relative mt-1">
                    <Listbox.Button className={`${style.button.default} ${style.button.borderWrap}`}>
                        <span className="block truncate" title={value.name ?? placeholder}>{value.name ?? placeholder}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className={style.item.wrap}>
                            {option.map((item, itemInx) => (
                                <Listbox.Option
                                    key={itemInx}
                                    className={({ active }) =>
                                        `${style.item.default} ${active ? style.item.active : style.item.notActive}`
                                    }
                                    value={item}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {item.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600 dark:text-slate-400">
                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>

    )
}

DropDown.propTypes = {
}
DropDown.defaultProps = {
}

export default DropDown
