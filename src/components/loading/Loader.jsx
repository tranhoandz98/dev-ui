import React from 'react';
import Spinner from 'components/core/spinner/Spinner';

const Loader = () => {
    return (
        <div id="loader"
            className="Loader flex items-center justify-center align-self-center w-full h-full top-0 left-0 bg-[#000000] cursor-wait z-50 opacity-60 fixed">
            <Spinner variant="danger"/>
        </div>
    )
}

export default Loader

