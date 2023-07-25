const { MongoClient } = require("mongodb");

const url = `mongodb+srv://harun:yO1LhlYA4x2LDJcn@cluster0.c8eyeom.mongodb.net/products_test?retryWrites=true&w=majority`;

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "Could not store data.", error });
  }
  client.close();

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
