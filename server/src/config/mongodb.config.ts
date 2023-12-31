const mongoose = require("mongoose");

class MongoDbConnection {
  URL = process.env.DB_URI;
  constructor() {
    if (!MongoDbConnection.instance) {
      this.URI = process.env.DB_URI;
      MongoDbConnection.instance = this;
    }
    return MongoDbConnection.instance;
  }

  connection() {
    mongoose
      .connect(this.URI, { useUnifiedTopology: true, useNewUrlParser: true })
      .then(() => console.log("DB connected Successfully"))
      .catch((err) => console.log("Error connecting DB", err));
  }
}

module.exports = new MongoDbConnection();
