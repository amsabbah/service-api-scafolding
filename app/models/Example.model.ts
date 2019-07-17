import { Document, Schema, Model, model } from "mongoose";

export interface ExampleDocument extends Document {
    name: number;
    email: string;
    createdDate: Date;
}

export interface ExampleModel extends ExampleDocument { }

export const ExampleSchema: Schema = new Schema(
    {
        name: Number,
        email: String,
        createdDate: Date
    },
    { collection: "examples" }
);

ExampleSchema.pre<ExampleDocument>("save", async function () {
    this.createdDate = new Date();
});

export const Example: Model<ExampleModel> = model<ExampleModel>(
    "Example",
    ExampleSchema
);