import app from "./app";

const isDev = process.env.NODE_ENV !=="production"


if (isDev) {
    const PORT = process.env.PORT ?? 3000;
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
}
