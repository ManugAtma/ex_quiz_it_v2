import { Spinner, Alert } from "react-bootstrap";

/**
 * @component
 * Manages display while loading content (fetching data from an API).
 * 
 * Behavior:
 * Displays a loading animation until the content is either loaded or an error occurs.
 * If the data is fetched successfully the children (using the data) are displayed.
 * Otherwise the error is displayed.
 * 
 * @param {Any} data - The data that is loaded/fetched (can be empty initially).
 * @param {string }error - The error code or message (can be empty initially).
 * @param {React.ReactNode} children - Content to display once data is loaded and no error occurred.

 * @returns {React.ReactNode} Either a spinner, an alert, or the children.
 * 
 */
function LoadingHandler({ data, error, children }) {

    if (!data && !error) {
        return (
            <div className="text-center">
                <Spinner animation="border" variant="primary" role="status" />
            </div>);
    }

    if (error) {
        return (
            <Alert variant={"warning"}>
                {error}
            </Alert>
        );
    }

    return children;
}

export default LoadingHandler;