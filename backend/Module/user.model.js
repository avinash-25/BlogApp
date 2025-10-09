//! In every models file, follow these three steps

/**`
 * 1. import mongoose
 * 2. define a schems/structure [by creating on object of schema class in mongoose]
 * 3. create a model/collection of that schema
 * 4. export that model
 */

//! Step - 1
import mongoose, {
    model,
    Schema
} from "mongoose";

//! step - 2
let userSchema = new Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
}, {
    timestamps: true,
});

//! step - 3
let userModel = model("User", userSchema); // name should passed as singular and should be passed as singular and should follow camelCasing.

//? model("name of the collection", schema) --> it will convert the schema into a collection/model

//? name of the collection --> users (plural + lowercase)

//! step - 4

export default userModel;