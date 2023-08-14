import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pictureUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    uploader: {
      type: String,
      required: true,
    },
    uploaderEmail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);