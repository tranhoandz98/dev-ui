import React, { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import DropDown from 'components/core/dropdown/DropDown'
import Table from 'components/core/table/Table'

const ApiBody = (props) => {

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
            name: <div>
                <div className="font-bold">
                    name
                    <span className="text-danger text-xs font-medium">* required</span>
                </div>
                <div className="text-xs">string (255)</div>
            </div>, description: "tên "
        },
        {
            name: <div>
                <div className="font-bold">
                    phone
                    <span className="text-danger text-xs font-medium">* required</span>
                </div>
                <div className="text-xs">int (10)</div>
            </div>, description: "Số điện thoại"
        },
        {
            name: <div>
                <div className="font-bold">
                    address
                    <span className="text-danger text-xs font-medium"></span>
                </div>
                <div className="text-xs">string (255)</div>
            </div>, description: "địa chỉ"
        },
        {
            name: <div>
                <div className="font-bold">
                    note
                    <span className="text-danger text-xs font-medium"></span>
                </div>
                <div className="text-xs">string (255)</div>
            </div>, description: "ghi chú"
        },

    ]

    const [rowdata, setRowData] = useState(emptyData)

    const columns = [
        {
            Header: "Name",
            accessor: "name",
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

    const testJson = `
    {
        "type": 3,
        "position_uuid": "bfb53881-2c8c-41ab-aeac-ede1316de18f",
        "organization_code": {
            "123123": true
        },
    }`
    return (
        <section className="mt-4 mb-4">
            <div className="flex justify-between">
                <h3 className="text-slate-900 tracking-tight dark:text-slate-200">
                    Mô tả dữ liệu
                </h3>
                <div>
                    <DropDown
                        value={activeType}
                        option={listType}
                        placeholder="Loại"
                        onChange={(e, value) => updateField(value)}
                        isBorder
                    />
                </div>
            </div>

            {activeType === 1 ?
                <Table columns={columns} data={rowdata}
                    overflowYAuto stickyHeader
                />
                : <div className="text-sm">
                    <pre>
                        <code>
                            {testJson}
                        </code>
                    </pre>
                </div>
            }
        </section>
    )
}

export default ApiBody