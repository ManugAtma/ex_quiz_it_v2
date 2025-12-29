import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

/**
 * @component
 * 
 * An Alert informing the user that current settings were saved successfully.
 * It is only shown for a specified duration.
 * 
 * @param {function} setShowAlert - A setter for the boolean variable showAlert.
 * @param {number} delay - Duration for which the Alert is shown.

 * @returns {JSX.Element} - An Alert.
 * 
 */

function SavedAlert({ setShowAlert, delay }) {

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false);
        }, delay)
    }, []);

    return (
        <Alert
            variant='success'
            id="saved-alert"
            className='mt-2 fs-5'
        >
            Settings saved
            <FontAwesomeIcon
                icon={faCheck}
                size="x"
                className="ms-2"
                beat
            />
        </Alert>
    );
}

export default SavedAlert;