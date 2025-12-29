import { useState, useEffect } from "react";

/**
 * Custom hook to fetch data from an API.
 * 
 * @param {string} url - The url to fetch data.
 * @param {Array} deps - The dependecies for useEffect.
 * @returns {[any, string, function]} - A tuple containing:
 *   0. data (any) - The fetched data, initially an empty string.
 *   1. error (string) - Error message if the fetch fails, otherwise empty string.
 *   2. setData (function) - Setter function to manually update `data`.
 */

function useFetch(url, deps = [], options = {}) {
   
    const [data, setData] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                if (!res.ok) throw new Error(res.status);
                const json = await res.json();
                setData(json);
            } catch (err) {
                if (err.message.match(/^\d+$/)) {
                    setError("HTTP error: " + err.message);
                } else {
                    setError("network problem: " + err.message);
                }
            }
        };
        console.log("fetching.. " + url)
        fetchData();
    }, deps);

    return [data, error, setData];
}

export default useFetch;