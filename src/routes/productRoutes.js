import express from "express";
import { ENDPOINT } from "../constant/constant";
import {
  createNewProduct,
  getProductById,
  updateViewCount,
  softDeleteAProduct,
} from "../controllers/productController";
const router = express.Router();

router.get(ENDPOINT.PRODUCTBYID, async (req, res, next) => {
  //Logic
  try {
    const result = await getProductById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
router.post(ENDPOINT.PRODUCT, async (req, res, next) => {
  const payload = req.body;
  try {
    //Logic
    const result = await createNewProduct(payload);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.put(ENDPOINT.PRODUCT, async (req, res, next) => {
  const payload = req.body;
  try {
    //Logic
    const result = await updateViewCount(payload, 4);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.delete(ENDPOINT.PRODUCTBYID, async (req, res, next) => {
  try {
    const result = await softDeleteAProduct(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
