import { DataTypes } from "sequelize";

const model = (sequelize) => {
  const Product = sequelize.define("Product", {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      field: "name",
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      field: "price",
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    description: {
      field: "description",
      type: DataTypes.STRING,
      allowNull: true,
    },
    viewCount: {
      field: "viewCount",
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isSoftDelete: {
      field: "isSoftDelete",
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
  });
  return Product;
};

export default model;
