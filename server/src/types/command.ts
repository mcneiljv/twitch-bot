import { Document } from "mongoose";

export interface CommandInterface extends Document {
  name: string;
  description: string;
  status: boolean;
}
