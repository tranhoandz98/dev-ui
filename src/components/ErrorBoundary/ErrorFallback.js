import { Button } from "primereact/button";
import React from "react";

function ErrorFallback(props) {
    const { error, resetErrorBoundary } = props;
    return (
        <div className="p-5">
            <h2>Something went wrong.</h2>
            <Button onClick={() => resetErrorBoundary()}
                className=" mb-3"
            >Try again
            </Button>
            <details style={{ whiteSpace: 'pre-wrap' }}
            >
                {error.stack}
            </details>
        </div>
    )
}
export default ErrorFallback
