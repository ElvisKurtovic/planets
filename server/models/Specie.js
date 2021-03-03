import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const Specie = new Schema(
    {
        title: { type: String, required: true },
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Specie;