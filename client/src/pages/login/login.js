// TODO replace hard coded url

export default async function login(auth, navigate) {
   
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
            console.log(`FRONTEND: received username: ${json.username} id: ${json.id}`);
            
            // set global state
            auth.username = json.username;
            auth.userId = json.id;
            auth.setAuthenticated(true);

            // navigate to welcome screen
            navigate(`/user/${json.id}`);

        } else {
            // handle not authenticated
        }
    } catch (err) {
        console.log(`error: ${err}`);
    }
}