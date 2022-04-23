import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import versionApi from 'api/versionApi';
import useStore from 'app/store';
import Badge from 'components/core/badge/Badge';
import DropDownMenu from 'components/core/dropdown-menu/DropDownMenu';
import { routerMain } from 'constants/routerMain';
import { useApp } from 'context/AppContext';
import AppTranslationsContext from 'context/AppTranslationsContext';
import { useContext, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useToggle } from '../provider/context';

export default function SidenavItems(props) {
    const { open } = useToggle();

    const projectData = useStore(state => state.projectData)
    const { showAlert } = useApp();

    const emptyVer = [
        { name: 'v1.32.1', code: 1 },
        { name: 'v1.32.2', code: 2 },
        { name: 'v1.32.3', code: 3 },
        { name: 'v1.32.4', code: 4 },
    ]

    const contextLang = useContext(AppTranslationsContext);
    const intl = useIntl()

    const [activeVer, setActiveVer] = useState()

    useEffect(() => {
        if (projectData) {
            const defaultVer =
            {
                name: projectData?.product?.active_version?.name,
                code: projectData?.product?.active_version?.uuid
            }
            setActiveVer(defaultVer)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectData])

    const [listVersion, setListVersion] = useState(emptyVer)

    const { data: listVersionApiApi, isFetching: loadingVersionApi } = useQuery(
        ["all-version-api", projectData?.uuid, contextLang.locale],
        async () => await versionApi.getAllByFilter({
            project_uuid: projectData?.uuid
        }), {
        enabled: !!projectData,
    }
    );

    const genDataVersionApiUi = () => {
        try {
            if (listVersionApiApi) {
                const { status, message, data } = listVersionApiApi;
                if (status === 2) {
                    showAlert('error', intl.formatMessage({ id: "FAIL" }), message);
                    return;
                }
                if (status === 1) {
                    let arr = [];
                    data.map((e) => {
                        arr.push({ code: e.uuid, name: e.name })
                        return e;
                    });
                    setListVersion(arr);


                }
            }
        } catch (error) {
            console.error('error: ', error);
        }
    }

    useEffect(() => {
        genDataVersionApiUi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listVersionApiApi, loadingVersionApi])

    const [versionItem, setVersionItem] = useState()

    const { data: dataItem, isFetching: loadingItem } = useQuery(
        ["version-item", { activeVer }, contextLang.locale],
        async () => {
            return await versionApi.getById({ uuid: activeVer?.code })
        }, {
        enabled: !!activeVer,
    }
    );

    const genDataItemUi = async () => {
        try {
            if (dataItem) {
                const { status, message, data, } = dataItem;

                if (status === 2) {
                    showAlert('error', intl.formatMessage({ id: "FAIL" }), message);
                    return;
                }
                if (status === 1) {
                    let apiGroupArrNew = Object.values(data.category_api).map(e => {
                        let newArr = [];
                        newArr["name"] = e[0].product_cate_name;
                        newArr["children"] = e;
                        return newArr
                    })
                    data.groupApi = apiGroupArrNew;
                    setVersionItem(data);
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

    const updateField = (data) => {
        setActiveVer(data);
    };

    const style = {
        default: `${open ? `h-screen overflow-y-auto` : `overflow-hidden`}`,
        item: `${open ? `h-screen overflow-y-auto max-h-[81vh]` : `overflow-hidden`}`
    }


    return (
        <>
            <div className={style.default}>
                <div
                    className={`w-full max-w-md px-2 lg:px-3`}
                >
                    <Link to={`${routerMain.PROJECT}/${projectData?.uuid}`}>
                        <div
                            className={`px-2 py-2 font-semibold`}
                        >
                            Tên dự án
                        </div>
                    </Link>
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
                            <DropDownMenu
                                value={activeVer}
                                option={listVersion}
                                placeholder={loadingVersionApi
                                    ? intl.formatMessage({ id: "LOADING" })
                                    : 'Version'
                                }

                                onChange={(value) => updateField(value)}
                            />
                        </div>
                    </div>
                </div>
                <div className={style.item}>
                    {loadingItem &&
                        <div className="w-full max-w-md lg:px-5 py-2 text-sm font-semibold">
                            {intl.formatMessage({ id: "LOADING" })}
                        </div>
                    }
                    {!loadingItem &&
                        <>
                            {versionItem?.groupApi?.map((item, index) => (
                                <div
                                    className={`w-full max-w-md px-2 lg:px-3 `}
                                    key={index}
                                >
                                    <>
                                        {item?.children?.length > 0
                                            ? <Disclosure>
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button className="flex justify-between w-full px-2 py-2 text-sm font-semibold text-left text-gray-700  rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 dark:text-gray-400 dark:hover:bg-gray-700">
                                                            <span>
                                                                {item?.name}

                                                            </span>
                                                            <ChevronDownIcon
                                                                className={`${open ? 'transform rotate-180' : ''
                                                                    } w-5 h-5 text-gray-700`}
                                                            />
                                                        </Disclosure.Button>
                                                        {item?.children?.map((itemChild, indexChild) => {
                                                            return (
                                                                <Link to={`${routerMain.PROJECT}/${projectData?.uuid}/${itemChild.api_uuid}`} key={indexChild}>
                                                                    <Disclosure.Panel className={`px-2 py-2 hover:bg-gray-100 rounded-lg text-sm flex dark:text-gray-400 dark:hover:bg-gray-700`}>
                                                                        {/* ${pathname === itemChild.link ? 'text-blue-700' : 'text-gray-700'} */}
                                                                        <div className="text-green-600 mr-2 font-semibold">
                                                                            <Badge variant="success"
                                                                                type="default"
                                                                                className=""
                                                                            >
                                                                                GET
                                                                            </Badge>
                                                                        </div>
                                                                        <div className="truncate " title={itemChild?.title}>
                                                                            {itemChild?.api_name}
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
                        </>
                    }
                </div>
            </div>
        </>
    );
}
