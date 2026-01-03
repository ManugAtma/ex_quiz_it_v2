// TODO replace hard coded url

export default async function login(setAuth, navigate) {
   
    try {

        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            
            // TODO replace with values from form 
            body: JSON.stringify({ username: "John", password: "doe" }),
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
            // handle not authenticated
        }
    } catch (err) {
        console.log(`error: ${err}`);
    }
}