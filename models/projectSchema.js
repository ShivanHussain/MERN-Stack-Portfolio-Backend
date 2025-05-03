import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required:[true,"Project Title is Required!"]
  },
  description: {
    type: String,
    required: [true,"Project Description is Required!"]
  },
  gitRepoLink: {
    type: String,
    required: [true,"Project Git Repo. is Required!"]
  },
  technologies: {
    type: String,
    required: [true, "Project Technologies is Required!"]
  },
  stack: String,
  deployed: String,
  projectBanner: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

export const Project = mongoose.model("Project", projectSchema);
