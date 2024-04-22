import dotenv from "dotenv";
const enviroment = "PRODUCTION";
dotenv.config({
  path:
    enviroment === "PRODUCTION" ? "./.env.production" : "./.env.development",
});
const config = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  user: process.env.USER,
  password: process.env.PASSWORD,
};
export default config;
