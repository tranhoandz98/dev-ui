import { ClockIcon } from '@heroicons/react/outline';
import { useApp } from 'context/AppContext';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dataProject } from './data';

const ProjectDetail = () => {
  const { setIsSideBar } = useApp();
  useEffect(() => {
    setIsSideBar(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container mx-auto">
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="logoProject"
              className="lg:w-1/2 w-full lg:h-auto h-64 rounded object-scale-down object-left-top
              "
              src={dataProject.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-4 mt-6 lg:mt-0 ">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {dataProject.name}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {dataProject.title} - {dataProject.code}
              </h1>
              <div className="flex mb-2">
                <span className="flex items-center">
                  <ClockIcon className="h-5 w-5" />
                  <span className="text-gray-600 ml-1 text-sm">Cập nhật lần cuối vào 15h30 25/02/2022</span>
                </span>
              </div>
              <div className="mb-4">
                <Link className="link" to="/">cyberlotus.com →</Link>
              </div>
              <p className="leading-relaxed">
                {dataProject.detail}
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default ProjectDetail
