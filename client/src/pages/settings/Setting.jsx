import React from "react";
import { Form } from "react-bootstrap";

/**
 * @component
 * A single setting to set with an select element. 
 *
 * @param {string} value - The current value of the select element.
 * @param {function} onChange - The setter for value.
 * @param {string} label - The name of the setting.
 * @param {JSX.Element} children - Select elements as children components.
 *
 * @returns {React.ReactNode} - A Form.Group component 
 * containing a Form.Select component.
 * 
 */
function Setting({ value, onChange, label, children }) {
    return (
        <Form.Group className="mb-3 mt-4">
            <Form.Label>{label}</Form.Label>
            <Form.Select value={value} onChange={onChange}>
                {children}
            </Form.Select>
        </Form.Group>
    );

}

export default Setting;