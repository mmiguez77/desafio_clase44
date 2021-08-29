const FactoryProducto = require("../../factory/factoryProducto.service.js");
const config = require("../../config/index.js");
const logger = require("../../helpers/winston.js");
const factory = new FactoryProducto(parseInt(config.DATABASE));

async function getProducts() {
  try {
    const prodInDb = await factory.findAllServiceProducto();
    return prodInDb;
  } catch (error) {
    logger.error.error(error);
  }
}

async function createProduct({ title, price, thumbnail }) {
  try {
    const data = { title, price, thumbnail };
    const newProd = await factory.addServiceProducto(data);
    return await newProd;
  } catch (error) {
    logger.error.error(error);
  }
}

async function getById(_id) {
  try {
    const { title, price, thumbnail } = await factory.findByIDServiceProducto(
      _id
    );
    return { title, price, thumbnail };
  } catch (error) {
    logger.error.error(error);
  }
}

async function updateProduct({input}) {
  try {
    const _id = (input._id);
    const data = {title, price, thumbnail} = await {... input};
    await factory.updateServiceProducto(_id, data);
    const result = "Producto actualizado con éxito"
    return result;
  } catch (error) {
    logger.error.error(error);
  }
}

async function deleteProduct(_id) {
  try {
    await factory.deleteServiceProducto(_id);
    const result = "Exito al eliminar producto";
    return result;
  } catch (error) {
    logger.error.error(error);
  }
}

module.exports = { getProducts, getById, createProduct, deleteProduct, updateProduct };
