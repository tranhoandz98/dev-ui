import { ArrowSmDownIcon } from '@heroicons/react/outline'
import React, { useEffect } from 'react'
import { projectData, softwareData } from './dashboardData'
import { Link } from 'react-router-dom'
import { useApp } from 'context/AppContext'

const Home = () => {
  const { setIsSideBar } = useApp();
  useEffect(() => {
    setIsSideBar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container mx-auto">
      <section className="text-gray-600 body-font mb-10">
        <div className="">
          <h2 className="font-semibold text-xl mb-2 ">Dự án</h2>
          <div className="flex flex-wrap -m-4 overflow-y-auto max-h-[40vh]">
            {projectData.map((item, index) => {
              return (
                <div className="p-4 md:w-1/3" key={index}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-24 md:h-20 w-full p-2 object-center object-scale-down"
                      src={item.img}
                      alt="blog" />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {item.title}
                      </h1>
                      <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                        {item.version}
                      </h2>
                      <p className="leading-relaxed mb-3 font-medium">
                        <span className="text-red-600">
                          {item.detail} API
                        </span>
                        {" "}với đầy đủ tài liệu
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                          to={item.url}
                        >Tìm hiểu thêm
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font ">
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
                        <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0"
                          href={item.url}
                          download={true}
                        >Tải xuống
                          <ArrowSmDownIcon className="w-5 h-5 ml-2" />
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
    </div>
  )
}

export default Home
