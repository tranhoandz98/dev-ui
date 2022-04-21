import React, { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import DropDown from 'components/core/dropdown/DropDown'
import Table from 'components/core/table/Table'

const ApiResult = (props) => {

    const emptyVer = [
        { name: 'multipart/form-data', code: 1 },
        { name: 'application/json', code: 2 },
    ]
    const [activeType, setActiveType] = useState(1)
    const [listType, setListType] = useState(emptyVer)

    const updateField = (data) => {
        setActiveType(data);
    };



    const emptyData = [
        {
            status: <div>
                200
            </div>, description:
                <div>
                    <div>
                        <div className="text-xs font-semibold">Giá trị</div>
                        <p>Đây là giá trị</p>
                    </div>

                    <div className="mt-2">
                        <div className="text-xs font-semibold">Ví dụ</div>
                        <p>
                            {`{
        "type": 3,
        "position_uuid": "bfb53881-2c8c-41ab-aeac-ede1316de18f",
        "organization_code": {
            "123123": true
        },
    }`}
                        </p>
                    </div>

                </div>
        },
        {
            status: <div>
                500
            </div>, description: "ghi chú"
        },

    ]

    const [rowdata, setRowData] = useState(emptyData)

    const columns = [
        {
            Header: "Trạng thái",
            accessor: "status",
            className: `max-w-1/3 w-1/3 min-w-40`,
            items: {
                // className: `overflow-y-auto max-h-16`,
            },
            rowScroll: true,
        },
        {
            Header: "Mô tả",
            accessor: "description",
            className: `max-w-2/3 w-2/3 min-w-40`,
            items: {
                // className: `overflow-y-auto max-h-16`,
            },
            rowScroll: true,
        },
    ]

    return (
        <section className="mt-4 mb-4">
            <div className="flex justify-between">
                <h3 className="text-slate-900 tracking-tight dark:text-slate-200">
                    Kết quả
                </h3>
            </div>
            <div>
                Cấu trúc:
                Json
                <p className="text-sm">Mô tả cấu trúc ở đây</p>
            </div>
            <div className="">
                <Table columns={columns} data={rowdata}
                    overflowYAuto stickyHeader
                />
            </div>

        </section>
    )
}

export default ApiResult