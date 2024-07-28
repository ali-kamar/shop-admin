const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const products = await Product.find(filter).sort("createdAt");
    res.status(StatusCodes.OK).json({ products });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  const {
    params: { id: productId },
  } = req;

  const product = await Product.findOne({ _id: productId });
  if (!product) {
    throw new NotFoundError(`No product with id ${productId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const updateProduct = async (req, res) => {
  const {
    body: { name, category, price, url, description },
    params: { id: productId },
  } = req;

  if (!name || !category || !price || !url) {
    throw new BadRequestError("Company and Position can not be empty");
  }

  const product = await Product.findByIdAndUpdate(
    { _id: productId},
    req.body,
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ product });

};

const deleteProduct = async (req, res) => {
  const {
    params: { id: productId },
  } = req;

  const product = await Product.findOneAndDelete({
    _id: productId,
  });

  if (!product) {
    throw new NotFoundError(`No product with id ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
