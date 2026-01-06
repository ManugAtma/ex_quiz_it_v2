
export default async function login(setAuth, navigate, username, password, setError, setFetching) {
   
    try {

        setFetching(true);
        setError("");

        // TODO remove this, for testing only
        // const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        // await sleep(2000)

        const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

        const response = await fetch(`${BACKEND_BASE_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            
            // TODO remove this 
            //body: JSON.stringify({ username: "John", password: "doe" }),

            body: JSON.stringify({ username, password }),
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            console.log(`Received username: ${json.username} id: ${json.id}`);

            // set as current user
            setAuth({
                username: json.username,
                userId: json.id,
                authenticated: true
            });
            
            // navigate to welcome screen
            navigate(`/user/${json.id}`);

        } else {
            setError("Invalid username or password. Please try again.");
        }
    } catch (err) {
        console.log(`error: ${err}`);
    } finally {
        setFetching(false)
    }
}