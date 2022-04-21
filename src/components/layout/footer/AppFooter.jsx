import React from 'react'

const AppFooter = () => {
    return (
        <div className="border-t border-inherit h-16 content-center flex flex-wrap w-full">
            <div className="container p-5 mx-auto text-sm flex justify-between">
                <div className="">
                    © 2022 Toàn bộ bản quyền thuộc <a className="link" href="https://cyberlotus.com/" target="_blank" rel="noopener noreferrer">
                        CyberLotus
                    </a>
                </div>
                <div className="">
                    CyberDevs Phiên bản {" "}{require('../../../../package.json') && require('../../../../package.json').version}
                </div>
            </div>
        </div>
    )
}

export default AppFooter