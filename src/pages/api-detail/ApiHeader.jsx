import React, { useState } from 'react'
import Table from "components/core/table/Table"

const ApiHeader = () => {
    const emptyData = [
        {
            key: `abc chúng ta abc chúng ta abc chúng ta abc chúng ta abc chúng ta abc chúng ta abc chúng ta abc chúng ta abc chúng ta
    abc chúng ta abc chúng ta abc chúng ta
    abc chúng ta abc chúng ta abc chúng ta
    abc chúng ta abc chúng ta abc chúng ta
    abc chúng ta abc chúng ta abc chúng ta
    abc chúng ta abc chúng ta abc chúng ta
    abc chúng ta abc chúng ta abc chúng ta

    abc chúng ta abc chúng ta abc chúng ta

    abc chúng ta abc chúng ta abc chúng ta
    abc chúng ta abc chúng ta abc chúng ta

    abc chúng ta abc chúng ta abc chúng ta

    abc chúng ta abc chúng ta abc chúng ta

    abc chúng ta abc chúng ta abc chúng ta

    abc chúng ta abc chúng ta abc chúng ta

    abc chúng ta abc chúng ta abc chúng ta

    
    `, value: "def abc chúng ta abc chúng ta abc chúng ta", description: "gdh abc chúng ta abc chúng ta "
        },
        { key: "abc abc chúng ta", value: "def", description: "gdh" },
        { key: "abc abc chúng ta", value: "def", description: "gdh" },
        { key: "abc", value: "def", description: "gdh" },
        { key: "abc", value: "def", description: "gdh" },
        { key: "abc", value: "def", description: "gdh" },
    ]

    const [rowdata, setRowData] = useState(emptyData)

    const columns = [
        {
            Header: "Key",
            accessor: "key",
            className: `max-w-1/3 w-1/3 min-w-40`,
            rowScroll: true,
            items: {
                className: `overflow-y-auto max-h-16`,
            }
        },
        {
            Header: "Value",
            accessor: "value",
            className: `max-w-1/3 w-1/3 min-w-40`,
            items: {
                className: `overflow-y-auto max-h-16`,
            },
            rowScroll: true,
        },
        {
            Header: "Mô tả",
            accessor: "description",
            className: `max-w-1/3 w-1/3 min-w-40`,
            items: {
                className: `overflow-y-auto max-h-16`,
            },
            rowScroll: true,
        },
    ]


    return (
        <section className="mt-2 mb-4">
            <h3 className="text-slate-900 tracking-tight dark:text-slate-200">
                Header
            </h3>
            <div className="flex justify-center mt-2">
                <Table columns={columns} data={rowdata} showGrid
                />
            </div>

        </section>
    )
}

export default ApiHeader