import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
    // name: { type: String, required: true },
    // account: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
});

UserSchema.set("collection", "User");

export default mongoose.model("User", UserSchema);
