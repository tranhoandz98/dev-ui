import React from "react";

function ErrorFallback(props) {
    const { error, resetErrorBoundary } = props;
    return (
        <div className="p-5">
            <h2>Something went wrong.</h2>
            <button onClick={() => resetErrorBoundary()}
                className=" mb-3 btn btn-blue"
            >Try again
            </button>
            <details style={{ whiteSpace: 'pre-wrap' }}
            >
                {error.stack}
            </details>
        </div>
    )
}
export default ErrorFallback
