import React from 'react';

const LoaderText = ({ isLoading }) => {
    if (!isLoading) return null;
    return (
        <div id="loader" className="LoaderText">
            Loading pdf...
        </div>
    )
}

export default LoaderText

