import Badge from 'components/core/badge/Badge';
import { useApp } from 'context/AppContext';
import React, { useEffect, useContext, useState } from 'react'
import ApiBody from './ApiBody';
import ApiHeader from './ApiHeader';
import ApiResult from './ApiResult';
import { useParams } from "react-router";
import ExampleCode from './ExampleCode'
import AppTranslationsContext from 'context/AppTranslationsContext';
import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';
import apiManagerApi from 'api/apiManagerApi';
import Loader from 'components/loading/Loader';

const ApiDetail = () => {
    const { setIsSideBar } = useApp();
    useEffect(() => {
        setIsSideBar(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { uuid, uuidApi } = useParams();
    const contextLang = useContext(AppTranslationsContext);
    const intl = useIntl()
    const { showAlert } = useApp();

    const [adData, setAdData] = useState();


    const { data: dataItem, isFetching: loadingItem } = useQuery(
        ["api-manager-item", uuid, uuidApi, contextLang.locale],
        async () => {
            return await apiManagerApi.getById(
                {
                    project_uuid: uuid,
                    uuid: uuidApi,
                }
            )
        }, {
        enabled: !!uuid || !!uuidApi,
    }
    );

    const genDataItemUi = () => {
        try {
            if (dataItem) {
                console.log('dataItem: ', dataItem);
                const { status, data, message } = dataItem;
                if (status === 2) {
                    showAlert('error', intl.formatMessage({ id: "FAIL" }), message);
                    return;
                }
                if (status === 1) {
                    setAdData(data);
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
        <div className="flex flex-wrap -m-4 container mx-auto pt-4">
            {loadingItem &&
                // <Loader />
                <div className="p-4">
                {intl.formatMessage({ id: "LOADING" })}
                </div>
            }
            {!loadingItem &&
                <>
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
                        <ApiHeader data={adData?.product_header} />
                        <ApiBody data={adData?.api_params}/>
                        <ApiResult data={adData?.api_response}/>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <ExampleCode data={adData?.api_example}/>
                    </div>
                </>
            }
        </div>
    )
}

export default ApiDetail
