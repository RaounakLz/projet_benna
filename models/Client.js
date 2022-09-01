const mongoose = require("mongoose");
const schema = mongoose.Schema;

const clientSchema = new schema({
  name: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
  },
});

const Client = mongoose.model("client", clientSchema);

module.exports = Client;
