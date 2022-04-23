import { ClockIcon } from '@heroicons/react/outline';
import { useApp } from 'context/AppContext';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import AppTranslationsContext from 'context/AppTranslationsContext';
import { useQuery } from 'react-query';
import projectApi from 'api/projectApi';
import { useIntl } from 'react-intl';
import Loader from 'components/loading/Loader';
import { formatDateTime } from 'helpers/date/formatDateTime';
import useStore from 'app/store';

const ProjectDetail = () => {
    const { setIsSideBar } = useApp();
    useEffect(() => {
        setIsSideBar(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const { showAlert } = useApp();
    const intl = useIntl()

    const { uuid } = useParams();
    const [adData, setAdData] = useState();

    const contextLang = useContext(AppTranslationsContext);

    const { data: dataItem, isFetching: loadingItem } = useQuery(
        ["project-item", uuid, contextLang.locale],
        async () => {
            return await projectApi.getById({ uuid: uuid })
        },
    );
    const setProjectData = useStore(state => state.setProjectData)
    const genDataItemUi = () => {
        try {
            if (dataItem) {
                const { status, data, message } = dataItem;
                if (status === 2) {
                    showAlert('error', intl.formatMessage({ id: "FAIL" }), message);
                    return;
                }
                if (status === 1) {
                    setAdData(data);

                    setProjectData(data);
                }
            }
        } catch (error) {
            console.error('error: ', error);
        }
    }

    useEffect(() => {
        genDataItemUi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataItem, loadingItem])

    return (
        <div className="container mx-auto">
            {loadingItem &&
                <Loader />
            }
            {adData &&
                <section className="text-gray-600 body-font ">
                    <div className="container px-5 py-5 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="logoProject" className="lg:w-1/3 w-full lg:h-auto h-64 rounded object-scale-down object-left-top"
                                src={adData?.product?.logo ??'https://dummyimage.com/294x186'}
                            />
                            <div className="lg:w-2/3 w-full lg:pl-10 lg:py-4 mt-6 lg:mt-0 ">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    {adData?.name}
                                </h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {adData?.product?.name} - {adData?.product?.code}
                                </h1>
                                <div className="flex mb-2">
                                    <span className="flex items-center">
                                        <ClockIcon className="h-5 w-5" />
                                        <span className="text-gray-600 ml-1 text-sm">Cập nhật lần cuối vào {formatDateTime(adData?.product?.created_at)}
                                        </span>
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <Link className="link" to={adData?.product?.url ?? '/'}>
                                        {adData?.product?.url}</Link>
                                </div>
                                <p className="leading-relaxed">
                                    {adData?.product?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            }

        </div>
    )
}

export default ProjectDetail
