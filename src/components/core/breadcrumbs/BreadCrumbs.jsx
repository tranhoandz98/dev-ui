import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({ data }) => {
    return (
        <nav className=" rounded-md w-full mb-2">
            <ol className="list-reset flex">
                {data.map((item, index) =>
                    <React.Fragment key={index}>
                        {index === data.length - 1
                            ? <li><Link to={item.to} className="text-gray-800 hover:text-gray-900 ">{item.title}</Link></li>
                            : <li><Link to={item.to} className="text-slate-500 hover:text-gray-700 hover:underline ">{item.title}</Link></li>
                        }
                        {index < data.length - 1 &&
                            <ChevronRightIcon className="w-[1.1rem] h-[1.1rem] text-gray-500 mx-1 self-center" />
                            // <li><span className="text-gray-500 mx-2">{">"}</span></li>
                        }
                    </React.Fragment>
                )}
            </ol>
        </nav>
    )
}

export default BreadCrumbs
