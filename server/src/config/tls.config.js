require("dotenv").config();

module.exports = {
  CERT_PEM: process.env.CERT_PEM,
  KEY_PEM: process.env.KEY_PEM,
};
