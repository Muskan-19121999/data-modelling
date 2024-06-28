import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    expInYears: {
      type: String,
      required: true,
    },
    hospitalsWorking: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Hospital", required: true },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", DoctorSchema);
