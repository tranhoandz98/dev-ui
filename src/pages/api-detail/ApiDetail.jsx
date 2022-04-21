import Badge from 'components/core/badge/Badge';
import { useApp } from 'context/AppContext';
import React, { useEffect } from 'react'
import ApiBody from './ApiBody';
import ApiHeader from './ApiHeader';
import ApiResult from './ApiResult';
import ExampleCode from './ExampleCode'

const ApiDetail = () => {
  const { setIsSideBar } = useApp();
  useEffect(() => {
    setIsSideBar(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-wrap -m-4 container mx-auto pt-4">
      <div className="p-4 md:w-2/3">
        <header id="header" className="relative mb-2">
          <div>
            <h2 className="mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
              nhóm api
            </h2>
            <div className="">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                Tên api
              </h1>
              <div className="text-sm ">
                <Badge variant="success" >
                  GET
                </Badge>
                {" "}`host/api/crm/tai-file/uploadLocalConvert`
              </div>

            </div>
          </div>
          <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
            Mô tả abc  Mô tả abc  Mô tả abc  Mô tả abc  Mô tả abc  Mô tả abc  Mô tả abc  Mô tả abc  Mô tả abc  Mô tả abc
          </p>
        </header>
        <hr />
        <ApiHeader />
        <ApiBody />
        <ApiResult />
      </div>
      <div className="p-4 md:w-1/3">
        <ExampleCode />
      </div>
    </div>
  )
}

export default ApiDetail
