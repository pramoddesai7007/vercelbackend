const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  gstNumber: {
    type: String,
    required: true,
    unique: true,
  },
  openingBalance: {
    type: Number,
  },
  debit: {
    type: Number,
    default: 0,
  },
  credit: {
    type: Number,
    default: 0,
  },
  // Add more fields as needed
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;