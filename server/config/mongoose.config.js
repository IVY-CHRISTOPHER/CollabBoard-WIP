import { connect } from "mongoose";
const db = "CollabBoard(WIP)_DB";

connect(`mongodb://127.0.0.1:27017/${db}`)
    .then(() => console.log(`Established a connection to ${db}`))
    .catch((err) =>
        console.log(`Something went wrong when connecting to ${db}`, err)
    );
