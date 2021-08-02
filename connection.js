import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true,
        });
        console.log(`mongoDB connected on ${con.connection.host}`);
    } catch (err) {
        console.error("DB connection Error ==>", err);
    }
};

export default connectDB;
