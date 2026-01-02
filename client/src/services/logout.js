
export default async function logout(auth, navigate) {
    try {
        const res = await fetch("http://localhost:3000/logout", {
            method: "POST",
            credentials: "include"
        });
    } catch (err) {
        console.log(`error: ${err}`);
    } finally {
        auth.setAuthenticated(false);
        auth.username = "";
        auth.userId = "";
        navigate("/login");
    }
}