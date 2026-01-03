
export default async function logout(setAuth, navigate) {
    try {
        const res = await fetch("http://localhost:3000/logout", {
            method: "POST",
            credentials: "include"
        });
    } catch (err) {
        console.log(`error: ${err}`);
    } finally {
        setAuth({
            userId: "",
            username: "",
            authenticated: false
        });
        navigate("/login");
    }
}