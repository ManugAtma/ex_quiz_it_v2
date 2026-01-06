
export default async function logout(setAuth, navigate) {
    try {

        const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
        
        const res = await fetch(`${BACKEND_BASE_URL}/logout`, {
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