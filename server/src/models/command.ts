import { CommandInterface } from "../types/command";
import { model, Schema } from "mongoose";

const commandSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<CommandInterface>("Command", commandSchema);
