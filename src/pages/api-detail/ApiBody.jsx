import React, { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import DropDown from 'components/core/dropdown/DropDown'

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

    return (
        <section className="mt-2 mb-4">
            <div className="flex justify-between">
                <h3 className="text-slate-900 tracking-tight dark:text-slate-200">
                    Mô tả dữ liệu
                </h3>
                <div>
                    <DropDown
                        value={activeType}
                        option={listType}
                        placeholder="Loại"
                        onChange={(e,value) =>  updateField(value) }
                        isBorder
                    />
                </div>
            </div>

            <div className="flex justify-center mt-2">
                {/* <Table columns={columns} data={rowdata} showGrid/> */}
            </div>

        </section>
    )
}

export default ApiBody