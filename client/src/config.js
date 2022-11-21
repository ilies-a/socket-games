const SERVER_PORT = 8000;
const DEV_SERVER_URL = "https://localhost:" + SERVER_PORT;
const PROD_SERVER_URL = DEV_SERVER_URL; // Replace with production URL

export const SERVER_URL =
  process.env.NODE_ENV === "production" ? PROD_SERVER_URL : DEV_SERVER_URL;
