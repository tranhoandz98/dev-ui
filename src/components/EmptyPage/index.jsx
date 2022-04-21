import React from 'react';
import Loader from 'components/loading/Loader';

const EmptyPage = () => {
    return (
        <div className="EmptyPage">
            <div className="flex p-ai-center p-jc-center p-as-center vh--100">
                <Loader />
            </div>
        </div>
    )
}

export default EmptyPage
