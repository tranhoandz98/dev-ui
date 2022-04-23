import React from 'react'
import { softwareData } from './dashboardData'

const SoftwareList = () => {
    return (
        <section className="text-gray-600 body-font mt-5">
            <div className="">
                <h2 className="font-semibold text-xl mb-2">Phần mềm</h2>
                <div className="flex flex-wrap -m-4">
                    {softwareData.map((item) => {
                        return (
                            <div className="p-4 md:w-1/4" key={item.id}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-36 md:max-h-24 p-3 w-full object-center object-scale-down"
                                        src={item.img}
                                        alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            {item.title}
                                        </h1>
                                        <p className="leading-relaxed mb-3">
                                            {item.detail}
                                        </p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="link"
                                                href={item.url}
                                                download={true}
                                            >Tải xuống
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SoftwareList
