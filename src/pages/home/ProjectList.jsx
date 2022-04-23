import projectApi from 'api/projectApi'
import Loader from 'components/loading/Loader'
import { routerMain } from 'constants/routerMain'
import { useApp } from 'context/AppContext'
import AppTranslationsContext from 'context/AppTranslationsContext'
import React, { useContext, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

const ProjectList = () => {
    const contextLang = useContext(AppTranslationsContext);
    const intl = useIntl()

    const { showAlert } = useApp();
    const [listProject, setListProject] = useState([]);
    const { data: listProjectApi, isFetching: loadingProject } = useQuery(
        ["all-partner", contextLang.locale],
        async () => await projectApi.getAll(),
    );

    const genDataPartnerUi = () => {
        try {
            if (listProjectApi) {
                const { status, message, data } = listProjectApi;
                if (status === 2) {
                    showAlert('error', intl.formatMessage({ id: "FAIL" }), message);
                    return;
                }
                if (status === 1) {
                    setListProject(data);
                }
            }
        } catch (error) {
            console.error('error: ', error);
        }
    }

    useEffect(() => {
        genDataPartnerUi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listProjectApi, loadingProject])

    return (
        <>
            {loadingProject &&
                <Loader />
            }
            {
                listProject.length > 0 &&
                <section className="text-gray-600 body-font mb-10 mt-5">
                    <div className="">
                        <h2 className="font-semibold text-xl mb-2 ">Dự án</h2>
                        <div className="flex flex-wrap -m-4 overflow-y-auto max-h-[40vh]">
                            {listProject.map((item, index) => {
                                return (
                                    <div className="p-4 md:w-1/3" key={index}>
                                        <div className="h-full p-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img className="lg:h-24 md:h-20 w-full object-center object-scale-down"
                                                src={item?.product?.logo ?? "https://dummyimage.com/401x96"}
                                                alt="blog" />
                                            <div className="p-4">
                                                <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                                                    {item?.product?.name}
                                                </h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                                                    {item?.name}
                                                </h1>
                                                <h2 className="tracking-widest text-sm title-font font-medium text-green-600 mb-1">
                                                    {item?.product?.active_version?.name}
                                                </h2>
                                                <p className="leading-relaxed mb-3 font-medium">
                                                    <span className="text-red-600">
                                                        {item?.product?.active_version?.total_api} API
                                                    </span>
                                                    {" "}với đầy đủ tài liệu
                                                </p>
                                                <div className=" overflow-hidden">
                                                    <Link className="link"
                                                        to={`${routerMain.PROJECT}/${item?.uuid}`}
                                                    >Tìm hiểu thêm
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
            }
        </>
    )
}

export default ProjectList
