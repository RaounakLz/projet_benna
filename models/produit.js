const mongoose = require("mongoose");
const schema = mongoose.Schema;

const produitSchema = new schema({
  categorie: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  prix: { type: Number, required: true },
  image: { type: String, required: true },

});

const Produit = mongoose.model("produit", produitSchema);

module.exports = Produit;
