import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Badge from 'components/core/badge/Badge';
import { useLocation } from 'react-router-dom';
import data from './data';
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import DropDown from 'components/core/dropdown/DropDown';

export default function SidenavItems() {
  const { pathname } = useLocation();

  const emptyVer = [
    { name: 'v1.32.1', code: 1 },
    { name: 'v1.32.2', code: 2 },
    { name: 'v1.32.3', code: 3 },
    { name: 'v1.32.4', code: 4 },
  ]
  const [activeVer, setActiveVer] = useState()
  const [listVersion, setListVersion] = useState(emptyVer)

  const updateField = (data) => {
    setActiveVer(data);
  };

  return (
    <div className="h-screen overflow-y-auto ">
      <div
        className={`w-full max-w-md px-2 lg:px-3`}
      >
        <div
          className={`px-2 py-2 font-semibold`}
        >
          Tên dự án
        </div>
        <div
          className={`px-2 py-2 font-semibold`}
        >
          Tên sản phẩm
        </div>
        <div
          className={`px-2 py-2 font-semibold flex justify-between`}
        >
          <div>
            Version
          </div>
          <div>
            <DropDown
              value={activeVer}
              option={listVersion}
              placeholder="Version"
              onChange={(e, value) => updateField(value)}
            />
            {/* <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full px-2 text-sm font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  {activeVer ?
                    listVersion.find(e => e.code === activeVer)?.name
                    : 'Version'}

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
                <Menu.Items className="absolute right-0 w-28 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    {listVersion.map((item, index) => {
                      return (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <button
                              className={`${active ? 'bg-sky-400 text-white' : 'text-gray-900'
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              onClick={(e) => updateField(item?.code)}
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
            </Menu> */}
          </div>
        </div>
      </div>
      <div className="h-screen overflow-y-auto max-h-[81vh]">

        {data.map((item, index) => (
          <div
            className={`w-full max-w-md px-2 lg:px-3 `}
            key={index}
          >
            <>
              {item?.items?.length > 0
                ? <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-2 py-2 text-sm font-semibold text-left text-gray-700  rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 dark:text-gray-400 dark:hover:bg-gray-700">
                        <span>
                          {item.title}

                        </span>
                        <ChevronDownIcon
                          className={`${open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-gray-700`}
                        />
                      </Disclosure.Button>
                      {item?.items?.map((itemChild, indexChild) => {
                        return (
                          <Link to={itemChild?.url ?? '/'} key={indexChild}>
                            <Disclosure.Panel className={`px-2 py-2 hover:bg-gray-100 rounded-lg text-sm flex dark:text-gray-400 dark:hover:bg-gray-700
                                ${pathname === itemChild.link ? 'text-blue-700' : 'text-gray-700'}
                                `}>
                              <div className="text-green-600 mr-2 font-semibold">
                                <Badge variant="success"
                                  type="default"
                                  className=""
                                >
                                  GET
                                </Badge>
                              </div>
                              <div className="truncate " title={itemChild?.title}>
                                {itemChild?.title}
                              </div>
                            </Disclosure.Panel>
                          </Link>
                        )
                      })}

                    </>
                  )}
                </Disclosure>
                : <div
                  className={`w-full px-2 py-2 font-semibold dark:text-white`}
                >
                  <Link to={item?.url ?? '/'} key={index}>
                    {item.title}
                  </Link>

                </div>
              }
            </>
          </div>
        ))}
      </div>
    </div>
  );
}
