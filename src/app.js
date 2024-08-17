import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express()


// some confiurations
app.use(cors({
    origin: Process.env.CROS_ORIGIN,
    credentials: true 
}))

app.use(express.json ({
    limit: "20kb"
}))

app.use(express.urlencoded({
    extended: true,
    limit: "20kb"
}))

app.use(express.static("public"))

app.ues(cookieParser())




















export { app }