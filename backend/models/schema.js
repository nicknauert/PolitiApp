const mongoose = require("mongoose");

const VoterSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  address: { type: String },
  zip: { type: Number },
  interests: [{ type: String }],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bill" }],
  dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bill" }],
  representatives: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bill" }]
});

const RepresentativeSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  zips: [{ type: Number }],
  yes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bill" }],
  no: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bill" }],
  leaningYes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bill" }],
  leaningNo: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bill" }]
});

const BillsSchema = new mongoose.Schema({
  title: { type: String },
  categories: [{ type: String }],
  synopsis: { type: String },
  status: { type: String },
  dateOfVote: { type: Date },
  popular: { type: Boolean }
});

const Voter = mongoose.model("Voter", VoterSchema);
const Representative = mongoose.model("Representative", RepresentativeSchema);
const Bill = mongoose.model("Bill", BillSchema);

module.exports = {
  Voter,
  Representative,
  Bill
};
