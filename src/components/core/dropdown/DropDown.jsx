import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'


const DropDown = ({ option, placeholder, value, onChange, isBorder, ...props }) => {
    const style = {
        borderWrap: `${isBorder ? 'px-3 border border-inherit  py-2 hover:bg-gray-100 dark:hover:bg-gray-700' : 'px-2 hover:font-semibold'}`,
        default: `inline-flex justify-center w-full text-sm font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
    `
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className={`${style.default} ${style.borderWrap}`}>
                    {value ?
                        option.find(e => e.code === value)?.name
                        : placeholder}

                    <ChevronDownIcon
                        className="w-5 h-5 ml-2 -mr-1 "
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
                <Menu.Items className="absolute border border-inherit right-0 w-max mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-900 dark:text-slate-400">
                    <div className="px-1 py-1 ">
                        {option.map((item, index) => {
                            return (
                                <Menu.Item key={index}>
                                    {({ active }) => (
                                        <button
                                            className={`${active ? 'bg-gray-100 dark:bg-gray-700' : ''
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                            onClick={(e) => onChange(e, item.code)}
                                        >
                                            {item.name}
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

DropDown.propTypes = {
}
DropDown.defaultProps = {
}

export default DropDown