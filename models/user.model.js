import { Schema, model } from "mongoose";

let userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is a required field"],
      minLength: [4, "username must be above 4 characters"],
      trim: true,
    },
    email: {
      type: String,
      // creates a unique index not a validator
      unique: true,
      required: [true, "email is a required field"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    password: {
      type: String,
      minLength: [6, "Min character length is 6"],
      required: [true, "password is a required field"],
    },
    confirmPassword: {
      type: String,
      minLength: [6, "Min character length is 6"],
      required: [true, "Confirm password is a required field"],
    },
  },
  {
    timestamps: true, //createdAt,updatedAt
  }
);


let User=model("User",userSchema);

export default User;