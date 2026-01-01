// TODO replace hard coded url

export default async function login(auth, navigate) {
   
    try {

        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            
            // TODO replace with values from form 
            body: JSON.stringify({ username: "g", password: "g" }),
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            console.log(`FRONTEND: received username: ${json.username} id: ${json.id}`);
            
            // set global state
            auth.username = json.username;
            auth.userId = json.id;
            //auth.authenticated = true;
            auth.setAuthenticated(true);

            // navigate to welcome screen
            navigate(`/user/${json.id}`);

        } else {
            // handle unauthorized
        }
    } catch (err) {
        console.log(`error: ${err}`);
    }
}