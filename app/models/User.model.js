import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    // name: { type: String, required: true },
    // account: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

UserSchema.set("collection", "User");

export default mongoose.model("User", UserSchema);
