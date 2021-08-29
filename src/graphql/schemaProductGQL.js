const { buildSchema } = require("graphql");
const {createProduct, getProducts, getById, deleteProduct, updateProduct} = require ("./functions/FnProductoGQL.js")

const schemaProductGQL = buildSchema(`
  input updateProduct {
    _id: String,
    title: String,
    price: Int,
    thumbnail: String
}
  type Product {
    _id: String,
    title: String,
    price: Int,
    thumbnail: String
  },
  type Query {
    getProducts: [Product],
    getById(_id: String!): Product
  },
  type Mutation {
    createProduct(
      title: String!,
      price: Int!,
      thumbnail: String): Product,
    deleteProduct(_id: String!): String,
    updateProduct(input: updateProduct): String
  }
`);

const rootProductGQL = {
  getProducts: getProducts,
  createProduct: createProduct,
  getById: getById,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
};

module.exports = { schemaProductGQL, rootProductGQL };
