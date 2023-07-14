import {app }from "./index.js"
import {connectionDB} from "./database/database.js"

connectionDB();


app.listen(3000,()=>{
    console.log("i am running")
})