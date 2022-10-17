import db from "../database/index";

const Product = db.product;

const createNewProduct = async (payload) => {
  return Product.create(payload).then((data) => {
    return data;
  });
};

const getProductById = async (id) => {
  const singleProduct = await Product.findOne({ where: { productId: id } });
  if (singleProduct && singleProduct.dataValues) {
    if (singleProduct.viewCount === null) {
      Object.assign(singleProduct.dataValues, { viewCount: 1 });
    } else {
      Object.assign(singleProduct.dataValues, {
        viewCount: singleProduct.dataValues.viewCount + 1,
      });
    }
    await updateViewCount(singleProduct.dataValues, id);
  }
  return singleProduct;
};
const updateViewCount = async (singleProduct, productId) => {
  return Product.update(singleProduct, {
    where: { productId: productId },
  }).then((data) => {
    return data;
  });
};
const softDeleteAProduct = async (id) => {
  const singleProduct = await Product.findOne({ where: { productId: id } });
  if (singleProduct && singleProduct.dataValues) {
    Object.assign(singleProduct.dataValues, {
      isSoftDelete: true,
    });

    await updateViewCount(singleProduct.dataValues, id);
  }
  return singleProduct;
};
export {
  createNewProduct,
  getProductById,
  updateViewCount,
  softDeleteAProduct,
};
